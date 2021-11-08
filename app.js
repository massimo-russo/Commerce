var cardProd = [];

var banana={
    nome:"banana",
    prezzo:1.50
}
var mela={
    nome:"mela",
    prezzo:1.50
}
var ciliegia={
    nome:"ciliegia",
    prezzo:3.00
}
var ananas={
    nome:"ananas",
    prezzo:1.10
}
var mandarino={
    nome:"mandarino",
    prezzo:2.30
}
var noce={
    nome:"noce",
    prezzo:1.10
}
var caco={
    nome:"caco",
    prezzo:1.20
}
var melone={
    nome:"melone",
    prezzo:2.20
}

var pera={
    nome:"pera",
    prezzo:2.00
}

var pesca={
    nome:"pesca",
    prezzo:2.00
}

function aggiungi(prodotto){
    cardProd.push(prodotto);
    document.getElementById('numeroProdotti').innerHTML = "Prodotti presenti nel carrello: " + cardProd.length;
    mostraTotale();
}


function rimuovi(prodotto){
    cardProd.pop(prodotto);
    document.getElementById('numeroProdotti').innerHTML = "Prodotti presenti nel carrello: " + cardProd.length;
    mostraTotale();
}


function mostraTotale(){
    var totaleConto=document.getElementById('totaleConto');
    totaleConto.innerHTML="Totale euro "+somma();
}

function somma(){
    var sommaTotale = 0;
    for(var i=0;i<cardProd.length;i++){
        sommaTotale+=cardProd[i].prezzo;
    }
    return sommaTotale;
}

function ordina(){
}

