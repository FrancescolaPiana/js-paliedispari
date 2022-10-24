// Pari e Dispari ♠ (alt+262)
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// let numrandom = randomNumber(1, 5);
// console.log(numrandom);


// FX PARI
let btnpari = document.getElementById('pari')
btnpari.addEventListener('click', pari )

function pari() {
    let numrandom = randomNumber(1, 5);
    console.log('numero randomizzato =' ,numrandom);

    let inputhuman = document.getElementById('number').value
    let number = parseInt(inputhuman);
    console.log('numero del player =' , number); 
    let result = numrandom + number;
    if (number > 5) {
        document.getElementById('response').innerHTML = 
        '<span class="errors">Puoi inserire numeri solo compresi tra 1 e 5</span>'
        document.getElementById('number').value = ''
    }
    else if(number < 1){
        document.getElementById('response').innerHTML = 
        '<span class="errors">Puoi inserire numeri solo compresi tra 1 e 5</span>'
        document.getElementById('number').value = ''
    }
    else if(isNaN(number)){
        document.getElementById('response').innerHTML = 
        '<span class="errors">Puoi inserire numeri solo compresi tra 1 e 5</span>'
        document.getElementById('number').value = ''
    }
    else{
        if ((result % 2) == 0) {
            document.getElementById('response').innerHTML = 'Hai Vinto'
        }
        else{
            document.getElementById('response').innerHTML = 'Hai Perso'
        }
        document.getElementById('number').value = ''
    }
   }

   
// FX DISPARI
let btndispari = document.getElementById('dispari')
btndispari.addEventListener('click', dispari )

function dispari() {
    let numrandom = randomNumber(1, 5);
    console.log('numero randomizzato =' ,numrandom);

    let inputhuman = document.getElementById('number').value
    let number = parseInt(inputhuman);
    console.log('numero del player =' , number); 
    let result = numrandom + number;
    if (number > 5) {
        document.getElementById('response').innerHTML = 
        '<span class="errors">Puoi inserire numeri solo compresi tra 1 e 5</span>'
        document.getElementById('number').value = ''
    }
    else if(number < 1){
        document.getElementById('response').innerHTML = 
        '<span class="errors">Puoi inserire numeri solo compresi tra 1 e 5</span>'
        document.getElementById('number').value = ''
    }
    else if(isNaN(number)){
        document.getElementById('response').innerHTML = 
        '<span class="errors">Puoi inserire numeri solo compresi tra 1 e 5</span>'
        document.getElementById('number').value = ''
    }
    else{
        if ((result % 2) == 0) {
            document.getElementById('response').innerHTML = 'Hai Perso'
        }
        else{
            document.getElementById('response').innerHTML = 'Hai Vinto'
        }
        document.getElementById('number').value = ''
    }
   }