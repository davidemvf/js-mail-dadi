//gioco dei dadi

var tirouno = parseInt(1 + Math.random()*6);
var tirodue = parseInt(1 + Math.random()*6);

// mostra il primo lancio
document.writeln(tirouno);

// mostra il secondo lancio
document.writeln(tirodue);

if (tirouno<tirodue){
  document.writeln("Il secondo giocatore ha vinto");
} if (tirouno>tirodue){
  document.writeln("Il primo giocatore ha vinto");
} if (tirouno==tirodue){
  document.writeln("Pareggio!");
}
