/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
/* SCRIVI QUI LA TUA RISPOSTA */


const area = function(l1 , l2){
    let result = l1 * l2
    return result
}
let rettangolo = area(5 , 7)
console.log(rettangolo)



/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazySum = function(a , b){
    let result;
    if(a === b){
         result = (a + b) * 3
    }else {
         result = a + b
    }
    return result
}
let total = crazySum(5, 7)
console.log(total)



/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const crazyDiff = function(num1 , num2 = 19){
    let result;
    if(num1 > num2){
        result = num1 - num2
    } else if(num1 < num2) {
        result = (num2 - num1)*3
    }
    return result
}
let resultOfCrazyDiff = crazyDiff(18)
console.log(resultOfCrazyDiff)





/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const boundary = function(n){
    let result;
    if(n > 20 && n <= 100 || n === 400){
        result = "true"
    }else{
        result = "false"
    }
    return result
}
let final = boundary(40)
console.log(final)






/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const epify = function(string){
    let result;
    for (let i = 0; i < string.length; i++) {
        const word = string.indexOf("EPICODE")
        if(word !== 0){
            result = "EPICODE" + " " + string
        }else if(word === 0) {
            result = string
        }
    }
    return result
}
let finalString = epify("EPICODE, corso fullStack")
console.log(finalString)




/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const check3and = function(c){
    let result;
    if(c % 7 === 0 ){
        result = "Divisibile per 7"
    }else if(c % 3 === 0){
        result = "Divisibile per 3"
    }else{
        result = "non divisibile ne per 3 ne per 7"
    }
    return result
}
console.log(check3and(12))




/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function(string){
    let array = string.split("")
    let arrayReverse = array.reverse()
    let result = arrayReverse.join("")

    return result
}
console.log(reverseString("EPICODE"))




/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const upperFirst = function(stringa){
    let result;
    result = stringa.split(" ")
    // for(i = 0; i <array2.length; i++){
    return result
}

console.log(upperFirst("ciao mi chiamo rachele"))
// volevo creare un array con le parole della stringa e poi cambiare la prima lettera di ogni elemtno dell'array ma mi sono bloccata


/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function(phrase){

let result = phrase.slice(1, -1)
    return result 
}
console.log(cutString("Ciao Mario"))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


const giveMeRandom = function (n) {
    let arrayResult = []
    for(i=0; i < n.length; i++){
    let random = Math.floor(Math.random()*10)
    arrayResult.push(random)
    }
}
console.log(giveMeRandom())