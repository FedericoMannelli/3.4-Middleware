// Importa il modulo Express e altri moduli necessari.
import express from "express";
import morgan from "morgan";

// Crea un'istanza di Express e assegna la variabile 'app'.
const app = express();

// Definisce la porta su cui il server ascolterà le richieste.
const port = 3000;

// Registra il middleware 'morgan' per il logging delle richieste HTTP ricevute dal server.
// L'argomento "combined" specifica il formato dei log, che include informazioni dettagliate.
app.use(morgan("combined"));

// Gestione della richiesta GET all'URL di root ('/').
app.get("/", (req, res) => {
  // Invia una risposta con il messaggio "Hello".
  res.send("Hello");
});

// Avvia il server e inizia ad ascoltare le richieste in arrivo sulla porta specificata.
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

//In questo codice, stiamo utilizzando il middleware morgan per registrare le richieste HTTP ricevute dal server nel log.
//Il parametro "combined" specifica il formato dei log, che include informazioni dettagliate come l'indirizzo IP del client, il metodo HTTP, l'URL richiesto, lo stato della risposta e altre informazioni utili.
//Inoltre, abbiamo una gestione per la richiesta GET all'URL di root ("/") che invia una risposta con il messaggio "Hello". Infine, il server viene avviato sulla porta 3000 e viene visualizzato un messaggio di conferma nell'output del log.
// L'uso del middleware morgan ci consente di tenere traccia delle richieste in arrivo e aiuta nella fase di debug e monitoraggio delle attività del server.

