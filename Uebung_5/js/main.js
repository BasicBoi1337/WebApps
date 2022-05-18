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
    let sum = 0;
    if (n <= 0){
        return sum;
    }
    sum += n;
    return summe(n-1);
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