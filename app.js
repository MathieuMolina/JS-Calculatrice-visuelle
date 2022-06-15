const touches = [...document.querySelectorAll('.bouton')];
// [...x] => Permet de créer un tableau et d'y attribuer immédiatement tout ce qui possède la classe bouton

const listeKeycode = touches.map(touche => touche.dataset.key);
//.map prends chaque élément du tableau, fait quelque chose à cet élément (fonction callback) et retourne le résultat sous forme d'un nouveau tableau.
console.log(listeKeycode)

const ecran = document.querySelector('.ecran');






document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);

});
//toString transforme l'élément number en élément string

document.addEventListener('click', (e) => {

    const valeur = e.target.dataset.key;  
    calculer(valeur);
});


//fonction calcule: fct qui récup le keycode de la touche et agit dessus

const calculer = (valeur) => {
    if(listeKeycode.includes(valeur)){
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;

            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
// ^ Include permet d'exclure les touches non incluses dans le tableau (ex: touche A);
//Renvoie "true" si le keycode est inclu dans la liste, à ce moment on pourra executer du code dessus

// ^ Le switch permet de travailler sur les 2 cas particulier différents des autres touches : "C" qui supprime et "=" qui lance le calcul avec eval() et affiche son contenu.


window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : '+ e.message);
})

// ^ permet d'afficher une alert d'erreur.  A VOIR POUR MODIFIER ET FAIRE APPARAITRE A L'ECRAN DIRECTEMENT !!

