/* Mail
- crea una lista contenente almeno 3 indirizzi email
- chiedi all’utente la sua email,
- controlla che sia nella lista di chi può accedere (lista creata sopra al punto 1),
- stampa un messaggio appropriato sull’esito del controllo.
 */

//crea una lista contenente almeno 3 indirizzi email
const mailList = ['dottori.roberto@gmail.com', 'mariorossi@yahoo.it', 'mariabianco@libero.it', 'francescorossi@live.it', 'giovannirossi@msn.com', 'filomenarosa@hotmail.it'];

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





//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/* Gioco dei dadi
Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
Ricordate che la documentazione 
è li per aiutarci: https://www.w3schools.com/js/js_random.asp 
*/

//Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
const randomPlayer = Math.floor(Math.random() * 6) + 1;
const randomComp = Math.floor(Math.random() * 6) + 1;

//richiamare elementi del DOM

//Players
const player = document.querySelector('.player');
const comp = document.querySelector('.comp');

//text
const numPlayer = document.querySelector('.number-player');
const numComp = document.querySelector('.number-comp');

//button
const btnDadi = document.querySelector('.btn-dadi');

btnDadi.addEventListener('click', function() {

    if(randomPlayer > randomComp) {
        numPlayer.innerHTML = randomPlayer;
        numComp.innerHTML = randomComp;
        player.classList.add('winner')
        comp.classList.add('looser')

    } else if (randomComp > randomPlayer) {
        numPlayer.innerHTML = randomPlayer;
        numComp.innerHTML = randomComp;
        player.classList.add('looser')
        comp.classList.add('winner')
    } else {
        numPlayer.innerHTML = randomPlayer;
        numComp.innerHTML = randomComp;
        player.classList.add('pari')
        comp.classList.add('pari')
    }
})