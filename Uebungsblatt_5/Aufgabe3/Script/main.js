'use strict'

let mitglieder = [
    {  
        name : "Smith",
        vorname : "John",
        email: "foo@bar.com"},
    {
        name : "Doe",
        vorname: "Jane",
        email: "jane@doe.com"
    },
    {  
        name : "Boi",
        vorname : "Alex",
        email: "Alex@boi.com"
    },
    {  
        name : "Eriksen",
        vorname : "Jo",
        email: "jo@eriksen.com"
    },
    {  
        name : "Sus",
        vorname : "Susi",
        email: "Susi@sus.com"
    },
];

//Globale Variable erzeugen, um Tabelle nur einmal erstellen zu lassen
window.tableCreatedAlready = 0;

//Array erzeugen für die Überschriften unserer Tabelle
let ueberschriften = ["Name", "Vorname", "Email", "Gruppe"];

//Button zum Drücken, sodass Tabelle erzeugt wird
let button = document.getElementById("createTable");
button.addEventListener("click", generateTable);

//Funktion zum generieren einer Tabelle über den DOM-Tree
function generateTable(event){
    //Wenn die Tabelle bereits einmal erstellt wurde, breche Funktion ab und erstelle keine weitere!
    if(tableCreatedAlready >= 1){
        return false;
    }

    //An "body" soll "table" appended werde
    let body = document.getElementById("tablediv");
    //Tabelle initialisieren
    let table = document.createElement("table");
    //Tabellenkopf mit Überschriften
    let thead = document.createElement("thead");
    let theadRow = document.createElement("tr");
    
    //Befüllen des Tabellenkopfes mit den Überschriften
    for(let i = 0; i < ueberschriften.length; i++){
        let cell = document.createElement("th");
        let cellText = document.createTextNode(ueberschriften[i]);
        cell.append(cellText);
        theadRow.append(cell);
    }
    
    //Inhalt für die Überschriften an Tabelle vernküpfen
    thead.append(theadRow);
    table.append(thead);

    //Tabellenkörper für Inhalt
    let tbody = document.createElement("tbody");

    //Inhalt für die eigentliche Tabelle hinzufügen
    for(let i = 0; i < mitglieder.length; i++){
        let tbodyRow = document.createElement("tr");

        //Um aus den Objekten im Mitglieder-Array die Daten zubekommen, habe ich mit der Funktion Object.values
        //Aus den Objekten, Arrays generiert, durch die ich dann itteriere und in meine Tabelle einfüge
        let personen = Object.values(mitglieder[i]);

        //Befüllen der Tabellenzeilen
        for(let j = 0; j < personen.length; j++){
            let cell = document.createElement("td");
            let cellText = document.createTextNode(personen[j]);
            cell.append(cellText);
            tbodyRow.append(cell);
        }

        //Add Button hinzufügen
        var addBtn = document.createElement("button");
        addBtn.type = "button";
        addBtn.className = "add";
        addBtn.value = "add"
        addBtn.textContent = "Add"
        addBtn.addEventListener("click", add);

        //Delete Button hinzufügen
        var delBtn = document.createElement("button");
        delBtn.type = "button";
        delBtn.className = "del";
        delBtn.value = "del"
        delBtn.textContent = "Delete"
        delBtn.addEventListener("click", remove)

        //Buttons an die Tabellenzeilen hinzufügen
        tbodyRow.append(addBtn);
        tbodyRow.append(delBtn);

        //Tabellenzeilen an den Tabellenkörper hinzufügen
        tbody.append(tbodyRow);
    }

    //Tabelleninhalt an Tabelle knüpfen
    table.append(tbody);

    //Fertige Tablle an den body verküpfen
    body.append(table);

    //Wurde Tabelle erstellt, zähle den Counter hoch.
    tableCreatedAlready++;
}

function add(){
    console.log(1);
}

function remove(){
    console.log(2);
}