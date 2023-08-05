// Importa il modulo Express e assegna la sua istanza ad una variabile chiamata 'app'.
import express from "express";
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Definisce un middleware 'logger' per registrare le informazioni di base sulla richiesta nel log del server.
function logger(req, res, next) {
  console.log("Request Method: ", req.method);
  console.log("Request URL: ", req.url);
  next();
}

// Registra il middleware 'logger' nell'applicazione per essere eseguito ad ogni richiesta in arrivo.
app.use(logger);

// Definisce una gestione per la richiesta GET all'URL di root ('/').
// Quando un client fa una richiesta GET a '/', viene inviata una risposta con il messaggio "Hello".
app.get("/", (req, res) => {
  res.send("Hello");
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//In sintesi, questo codice crea un server web utilizzando Express, registra un middleware 'logger' per registrare informazioni di base sulle richieste ricevute e definisce una gestione per la richiesta GET all'URL di root ("/") che restituisce una risposta con il messaggio "Hello". 
//Quando il server viene avviato, ascolterà le richieste in arrivo sulla porta 3000 e stamperà un messaggio di conferma nell'output del log.