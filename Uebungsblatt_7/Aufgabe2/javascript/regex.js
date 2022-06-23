let submit = document.getElementById("submit");

submit.addEventListener("click", function(evt){
    let inhaltName = document.getElementById("name").value;
    let inhaltAnmerkungen = document.getElementById("anmerk").value;

    let regexname = /^[a-z ,.'-]+$/i;

    let regExpForAnmerkungen = new RegExp("<[^>]*>");

    let testName = regexname.test(inhaltName);
    let testAnmerkungen = regExpForAnmerkungen.test(inhaltAnmerkungen);

    if(testAnmerkungen){
        evt.preventDefault();
        window.alert("Keine Codesnippets in den Anmerkungen erlaubt!");
    }

    if(!testName){
        evt.preventDefault();
        window.alert("Name wurde falsch eingegeben!");
    }

    


});