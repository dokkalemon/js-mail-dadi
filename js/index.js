/* Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo.
 */

//crea una lista contenente almeno 3 indirizzi email
const mailList = ['dottori.roberto@gmail.com', 'mariorossi@yahoo.it', 'mariabianco@libero.it', 'francescorossi@live.it', 'giovannirossi@msn.com', 'filomenarosa@hotmail.it'];
console.log(mailList)

//chiedi all’utente la sua email
//prendiamo i dati dall'utente
const userMail = document.getElementById('email');

//scateniamo l'evento al click
const button = document.querySelector('.btn-email');
let result = '';

button.addEventListener('click', function() {
    
    for (let i = 0; i < mailList.length; i++) {

        result = false;

        const title = document.querySelector('.titolo');
         
        if (userMail.value.trim().toLowerCase() == mailList[i]) {
            result = true;
            title.innerHTML = 'Indirizzo Email Valido'
            break;
        } else {
            result = false;
            title.innerHTML = 'Indirizzo Email Non Valido'
        };

    }
   
}) 











/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Ricordate che la documentazione 
è li per aiutarci: https://www.w3schools.com/js/js_random.asp 
*/