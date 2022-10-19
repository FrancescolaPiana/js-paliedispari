// Palidroma
// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma


let res;
let btn = document.getElementById('btn');
btn.addEventListener('click' , fx)

function fx() {
    let arraybase = [];
    let cell = document.getElementById('cell').value
    console.log(cell); 

    let split = cell.split('').reverse().join('')


    if (cell == split) {
        res = document.getElementById('response').innerHTML = 'è un palindromo';
        res.innerHTML = `L'input è Palindromo`
    }
    else{
        res = document.getElementById('response').innerHTML = 'Non è un palindromo';
        res.innerHTML = `L'input NON è Palindromo`
    }

    console.log('array iniziale' , split);
    console.log('array iniziale' , cell);
}
