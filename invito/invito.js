// Controlla se l'email inserita dall'utente appartiene alla lista
var utente = prompt("Inserisci Email:");
var iscritti = ["uno@hotmail.it", "due@gmail.com", "tre@icloud.com", "quattro@hotmail.it", "cinque@gmail.com"];
var antipatico = "Non sei invitato";

for (i=0; i<=4; i++){
  if (iscritti[i] == utente){
    antipatico = "Sei stato invitato!";

  }
}

document.writeln(antipatico);
