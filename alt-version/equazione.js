// Script per risolvere equazione di secondo grado inserendo i coefficienti numerici

var a = parseInt(prompt("Inserisci il coefficiente a"));
var b = parseInt(prompt("Inserisci il coefficiente b"));
var c = parseInt(prompt("Inserisci il coefficiente c")); //coefficienti
var delta = b**2 - 4*a*c;
var xuno = (-b + delta**1/2)/2*a;
var xdue = (-b - delta**1/2)/2*a;

if (delta>0){
  document.writeln("Le due soluzioni sono: ", xuno, xdue);
}

if (delta==0){
  document.writeln("L'unica soluzione è: ", xuno);
}

if (delta < 0){
  document.writeln("L'equazione non ammette soluzioni!")
}
