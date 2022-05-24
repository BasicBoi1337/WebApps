'use strict'

//Aufgabe 2 
document.getElementById("jsBMIrechner").addEventListener("click", function(evt){
    let size = document.getElementById("groesse").value;
    let weight = document.getElementById("gewicht").value;

    
    let bmi = weight / (Math.pow(size, 2));
    //Runden auf 2te Nachkommastelle
    bmi = bmi.toFixed(2);
    let output = document.getElementById("bmiSolution")
    output.innerText = "Ihr Body Mass Index beträgt " + bmi + "."; 
}, false)