let submit = document.getElementById("submit");

submit.addEventListener("click", function(evt){
    let inhaltName = document.getElementById("name").value;
    let inhaltAnmerkungen = document.getElementById("anmerk").value;

    // Regex direkt erzeugt und verglichen 
    let regexname = /^[a-z ,.'-]+$/

    // Neues Regex Objekt erzeugt und erst dann
    let regExpForAnmerkungen = new RegExp("<[^>]*>");

    let testName = regexname.test(inhaltName);
    let testAnmerkungen = regExpForAnmerkungen.test(inhaltAnmerkungen);

    if(!testName){
        evt.preventDefault();
        window.alert("Name wurde falsch eingegeben!");
    }

    if(testAnmerkungen){
        evt.preventDefault();
        window.alert("Keine Codesnippets in den Anmerkungen erlaubt!");
    }
});