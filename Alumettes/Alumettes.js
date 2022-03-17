let initMatches = 50;

function matchToRemove(){
    while (initMatches>0){
        let askMatches
        let valid=false;
        while (valid == false){
            askMatches=parseInt(prompt("Choisir le nombre d'allumettes entre un et 6 \n Il reste " + initMatches + " allumettes."));
            if (askMatches>=1 && askMatches<=6 && initMatches>=askMatches){
                valid = true
                console.log(askMatches);
                initMatches=initMatches-askMatches;
                console.log(initMatches); 
            } else {
                alert("Erreur, choisir un chiffre entre 1 et 6");
            }
         }
        // if (initMatches<askMatches){
        //     alert("Indiquer un chiffre inférieur à " + initMatches);
        //     matchToRemove()
        // } 
       // if (initMatches == 0){
      //  } else {
    
       
      //  }
    }
    let victoire = alert("Bravo, tu as gagné !");
}
matchToRemove();