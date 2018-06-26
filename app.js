// initialisation du server
const express = require('express');
const app = express();
var request = require('request');
var port = 3333;


// on utilise le moteur de template ejs
app.set('view engine', 'ejs');

// création de la fonction qui appel la variable prénom
function afficheprenom(res)

{
   var prenom = {prenom:"Idriss"};
   res.render('index', 
    prenom)
}



// route principale, pour afficher la page d'accueil
app.get("/", function (req, res) {
afficheprenom(res)
    
    
})
app.listen(port, () => console.log('Cool mec !'))
