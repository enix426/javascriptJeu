class jeu{
	 compteurClique = 0;
	 eTr;
	 eTd;
	 randomY;
	 randomX;
	
	// déclarer les variables du module
	// ce sont les variables communes à plusieurs des 3 fonctions du module pattern

		
		
		// fonction au chargement de la page
		// =================================

		initialiserPage() {

			this.initialiserJeu();

			let nouveauJeu = document.getElementById("nouveauJeu");

			nouveauJeu.addEventListener("click",()=>{
				this.initialiserJeu()
			});
			// initialisation de la page, à compléter :
			// - champs du formulaire (valeurs par défaut)
			// - variables (eGrille, eNbCoups) des éléments du DOM utilisés dans le module
			// - gestionnaire du bouton "Nouveau jeu" (associé à la fonction initialiserJeu)
			// - initialiser le jeu
		}
		

		// fonction d'initialisation d'un nouveau jeu
		// ==========================================

		initialiserJeu() {
			// attributes: [nom=valeur]
			// classe: .class-nane
			// id: #id 
			// element: td
			// td apres div: "div + td
			//selecteur css
			let axeX = document.querySelector("input[name=nbLignes]").value;
			let axeY = document.querySelector("input[name=nbColonnes]").value;
			
			this.compteurClique = 0;

			document.getElementById("nbCoups").innerHTML = this.compteurClique;
			document.getElementById("grille").innerHTML = "";

			this.randomY = Math.floor(Math.random() * axeY);
			this.randomX = Math.floor(Math.random() * axeX);

			console.log(this.randomY);
			console.log(this.randomX);

			let eTableau = document.getElementById("grille");

			for(var i =0; i<axeY; i++){
				 this.eTr = document.createElement("tr");

				eTableau.appendChild(this.eTr).setAttribute("data-c",[i]);

				for(var j =0; j<axeX;j++){
					
					 this.eTd = document.createElement("td");
					 
					 
					 this.eTr.appendChild(this.eTd).setAttribute("data-l",[j]);
					  this.eTd.addEventListener("click",(evt)=>{
						this.jouer(evt);
					});
				}
			}
			
			// initialisation du jeu, à compléter :
			// - initialiser le contenu du span nbCoups
			// - générer la grille avec le nombre de lignes et de colonnes du formulaire
			//   (voir exemple en commentaire dans la page html)
			// - générer de manière aléatoire, la case cible à découvrir dans cette grille
			// - ajouter le gestionnaire d'évènement pour gérer les clics sur les cases de la grille
		}


		// fonction de traitement d'un clic sur une case
		// =============================================

		jouer(evt) {


			let bonneReponceColonne = evt.target.parentNode.getAttributeNode("data-c").value;
			let bonneReponceLigne = evt.target.getAttributeNode("data-l").value;

			console.log(bonneReponceColonne);
			console.log(bonneReponceLigne);

			if (bonneReponceColonne == this.randomY && bonneReponceLigne == this.randomX){
				console.log("vous avez gagner");
				evt.target.classList.add("ok");
			}else{
				evt.target.classList.add("ko");
			}
			

			
			document.getElementById("nbCoups").innerHTML = this.compteurClique ++;

			
			// gestion d'un clic sur une case (filtrer les noeuds TD non déjà cliqués), à compléter :
			// - incrémenter le nombre de coups joués
			// - indiquer dans la case l'écart maximum (de lignes ou de colonnes) par rapport à la cible
			//   exploiter pour cela les coordonnées de la case 
			//   (attribut data-c du <td> pour le numéro de colonne et data-l du <tr> pour le numéro de ligne)
			// - si la cible est atteinte, empêcher tout nouveau clic
		}
	
	
	
}