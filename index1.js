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

// Registra il middleware 'bodyParser' per analizzare il corpo delle richieste POST con dati codificati in URL.
app.use(bodyParser.urlencoded({ extended: true }));

// Gestione della richiesta GET all'URL di root ('/').
app.get("/", (req, res) => {
  // Invia il file "index.html" dalla directory "public" come risposta alla richiesta.
  res.sendFile(__dirname + "/public/index.html");
});

// Gestione della richiesta POST all'URL "/submit".
app.post("/submit", (req, res) => {
  // Registra il corpo della richiesta POST nel log del server.
  console.log(req.body);
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

// In questo codice, stiamo utilizzando il middleware body-parser per analizzare il corpo delle richieste POST con dati codificati in URL.
//  Inoltre, viene definita una gestione per la richiesta GET all'URL di root ("/") per inviare il file "index.html" dalla directory "public" come risposta.
// Infine, abbiamo una gestione per la richiesta POST all'URL "/submit" che registra il corpo della richiesta nel log del server.
// Il server viene avviato sulla porta 3000 e viene visualizzato un messaggio di conferma nell'output del log.