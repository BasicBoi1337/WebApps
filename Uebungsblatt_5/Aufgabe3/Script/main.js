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

//https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
// Hat gut geholfen

console.log(mitglieder);

let button = document.getElementById("createTable");
button.addEventListener("click", generate_table);

function createTable(event){
    let table = document.createElement("table");

    let tr = document.createElement("tr");
    table.append(tr);
    let tr2 = document.createElement("tr");
    table.append(tr2);

    let td = document.createElement("td");
    td.innerHTML = "test";
    tr.append(td);
    td = document.createElement("td");
    td.innerHTML = "test2";
    tr.append(td);
    td = document.createElement("td");
    td.innerHTML = "test3";
    tr2.append(td);

    let tableDiv = document.getElementById("tablediv");
    tableDiv.append(table);
}

function generate_table(event){
      // get the reference for the body
  var body = document.getElementsByTagName("body")[0];

  // creates a <table> element and a <tbody> element
  var tbl = document.createElement("table");
  var tblBody = document.createElement("tbody");

  // creating all cells
  for (var i = 0; i < 2; i++) {
    // creates a table row
    var row = document.createElement("tr");

    for (var j = 0; j < 2; j++) {
      // Create a <td> element and a text node, make the text
      // node the contents of the <td>, and put the <td> at
      // the end of the table row
      var cell = document.createElement("td");
      var cellText = document.createTextNode("cell in row "+i+", column "+j);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  // appends <table> into <body>
  body.appendChild(tbl);
}
