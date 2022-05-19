'use strict'
//Aufgabe 2.1)
document.write("Hello WebApps" + "<br />")

//Aufgabe 2.2)
document.write("For-Loop");
for(let i = 0; i <= 10; i++){
    document.write(i);
}

document.write("<br />" + "While-Loop");
let j = 0;
while(j <= 10){
    document.write(j);
    j++
}

document.write("<br />" + "Do-While-Loop");
let k = 0;
do{
    document.write(k);
    k++;
} while(k <= 10);

//Aufgabe 2.3)
let today = new Date();
var day = today.getDay();
document.write("<br />") //Zeilenumbruch
switch(String(day)){
    case "0":
        alert("Sunday")
        break;
    case "1":
        alert("Monday")
        break;
    case "2":
        alert("Tuesday")
        break;
    case "3":
        alert("Wednesday")
        break;
    case "4":
        alert("Thursday")
        break;
    case "5":
        alert("Friday")
        break;
    case "6":
        alert("Saturday")
        break;
}


//Aufgabe 3.1)
function add(a, b){
    return a + b;
}

//Man könnte auch einfach add wieder nehmen, da JavaScript nicht typisiert ist.
function concat(a, b){
    return a + b;
}

console.log(add(5, 5));
console.log(concat("Hello ", "World!"));

//Aufgabe 3.2)
//TODO: Nochmal drüberschauen lassen
function summe(n){
    if (n <= 0){
        return 0;
    }
    return n + summe(n-1);
}

console.log(summe(5));

//Aufgabe 3.3)
//iterativ
function iterFak(n){
    let res = 1;
    for(let i = 1; i <= n; i++){
        res *= i;
    }

    return res;
}

console.log(iterFak(6));

//rekursiv
//TODO:
function rekFak(n){
    if (n <= 0){
        return 1;
    }
    return n * rekFak(n-1);
}

console.log(rekFak(5));

//Aufgabe 3.4)
function pyramid(n){
    let k = 0;
    let rows = n;
    
    for(let i = 1; i <= rows; ++i, k = 0){
        for(let space = 1; space <= rows - i; ++space){
            //Für whitespace genutzt
            document.write("&nbsp;&nbsp;&nbsp;");
        }

        while(k !== 2 * i -1){
            document.write("+ ");
            ++k;
        }
        document.write("<br />")
    }
}

pyramid(8);

//Aufgabe 4)
//TODO: Alle Unteraufgaben von Aufgabe 4.

//Aufgabe 4.1)
let arr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let i = day;

document.write("<br />" + arr[i] + "<br />");

//Aufgabe 4.2)
function fillArr(a, b, n){
    let size = n;
    let arr = new Array(size);
    let random = 0;

    for(let i = 0; i < arr.length; i++){
        random = Math.floor(Math.random() * (b - a) + a);
        arr[i] = random;
    }

    return arr;
}

document.write(fillArr(2, 7, 100) + "<br />");

//Aufgabe 4.3)
function sumArr(arr){
    let sum = 0;
    document.write("<br />" + "Für die Addition wurde folgendes Array genutzt: " + arr + "<br />");

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
    }

    return sum;
}

document.write("<br />" + "Die Summe der Array-Elemente beträgt: " + sumArr(fillArr(2, 5, 10)) + "<br />");

//Aufgabe 4.4)
function groessteZahl(arr){
    let biggest = 0;

    document.write("<br />" + "Für das Suchen der größten Zahl wurde folgendes Array genutzt: " + arr + "<br />");    

    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] > arr[i]){
            biggest = arr[i - 1];
        } else {
            biggest = arr[i];
        }
    }

    return biggest;
}

document.write("Die größte Zahl lautet: " + groessteZahl(fillArr(1, 10, 10)) + "<br />");

//Aufgabe 4.5)
function multiArr(){
    let arr = [];
    for (var i = 0; i < 12; i++) {
        arr[i] = [];
        for (var j = 0; j < 81; j++) {
            arr[i][j] = Math.floor(Math.random() * (10 - 1) + 1);;
        }
    }

    return arr;
}

function printMultiArr(arr){
    for(let i = 0; i < arr[i].length; i++){
        document.write("[ ");
        for(let j = 0; j < arr.length; j++){
            document.write(arr[i][j] + " ");
        }
        document.write(" ]");
        document.write("<br />");
    }
}

printMultiArr(multiArr());

//Aufgabe 5)
//TODO: Aufgabe fertig machen.
