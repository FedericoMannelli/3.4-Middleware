// Importa i moduli necessari da Express e altre librerie.
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Ottiene il percorso della directory corrente utilizzando 'dirname' e 'fileURLToPath'.
const __dirname = dirname(fileURLToPath(import.meta.url));

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Variabile per memorizzare il nome della band generato.
var bandName = "";

// Registra il middleware 'bodyParser' per analizzare il corpo delle richieste POST con dati codificati in URL.
app.use(bodyParser.urlencoded({ extended: true }));

// Definisce il middleware 'bandNameGenerator' per generare il nome della band dalla richiesta POST.
function bandNameGenerator(req, res, next) {
  // Registra il corpo della richiesta POST nel log del server.
  console.log(req.body);
  
  // Genera il nome della band concatenando i valori di "street" e "pet" dal corpo della richiesta.
  bandName = req.body["street"] + req.body["pet"];
  
  // Passa il controllo al prossimo middleware o alla gestione della route.
  next();
}

// Registra il middleware 'bandNameGenerator' nell'applicazione per essere eseguito ad ogni richiesta in arrivo.
app.use(bandNameGenerator);

// Gestione della richiesta GET all'URL di root ('/').
app.get("/", (req, res) => {
  // Invia il file "index.html" dalla directory "public" come risposta alla richiesta.
  res.sendFile(__dirname + "/public/index.html");
});

// Gestione della richiesta POST all'URL "/submit".
app.post("/submit", (req, res) => {
  // Invia una risposta con il nome della band generato all'interno di tag HTML.
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


// In questo codice, stiamo utilizzando il middleware body-parser per analizzare il corpo delle richieste POST con dati codificati in URL. 
// Viene definita una variabile bandName per memorizzare il nome della band generato.

// Abbiamo anche definito il middleware bandNameGenerator che viene eseguito ad ogni richiesta POST all'URL "/submit". 
// Questo middleware registra il corpo della richiesta POST nel log del server e genera un nome per la band concatenando i valori delle chiavi "street" e "pet" dal corpo della richiesta.

// Nella gestione della richiesta POST all'URL "/submit", viene inviata una risposta contenente il nome della band generato, il quale è inserito all'interno di tag HTML <h2> per mostrare un titolo più grande. 
// Il nome della band viene visualizzato insieme a un emoji della mano che fa la pace.

// Infine, il server viene avviato sulla porta 3000 e viene visualizzato un messaggio di conferma nell'output del log. 
// L'uso del middleware body-parser e del middleware bandNameGenerator ci permette di gestire le richieste POST e generare dinamicamente il nome della band da mostrare come risposta.