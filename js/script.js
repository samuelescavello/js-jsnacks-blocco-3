// Crea un array vuoto e chiedi all'utente un 
// numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e 
// a inserirli nell'array fino a quando la somma 
// degli elementi è minore di 50.

let num = [];
let sum = 0 ;

while (sum < 50){
    let numUser = parseInt(prompt('inserisci numero'));
    sum = sum + numUser
    if (!isNaN(numUser)){
        sum += numUser
        SVGAnimatedNumberList.push(numUser)
    }
}
console.log(sum)




// Fai inserire un numero, che chiameremo N, all'utente.
//  Genera con una funzione N array, ognuno formato da 10 
//  numeri casuali da 1 a 100.
//  Ogni volta che ne crei uno, stampalo.