var textDisplay = document.querySelector(".personsName")
var greetBtnElem = document.querySelector(".greetBtn")
var greetElem = document.querySelector("#greet")
var nameCounterElem = document.querySelector("#nameCounter")
var storedNamesElem = document.querySelector("#storedNames")
var counterElem = document.querySelector(".counter")
var resetBtnElem = document.querySelector(".resetBtn");

if(localStorage['name'] !== undefined){
var nameStore = JSON.parse(localStorage['name']);
} else {
    nameStore = {};
}                                                                                                                                          



var message = document.querySelector('.msg');
var instance = greetingOpp(nameStore);

counterElem.innerHTML = instance.nameCounter();
var personsName = document.querySelector(".personsName")

function greetDisplayBtn() {
   
    var name = personsName.value;
    var Vname = name.replace(/[\W\d_]/g, '');
    var lang = document.querySelector("input[name='myLang']:checked");
    if(lang){
           var language = lang.value;
    
           if(Vname === "" && language !== false){
        message.innerHTML = "Please enter name!";
    }
    else {
    message.innerHTML = instance.greet(Vname, language);
    }
    }
    else {
        message.innerHTML = "Please select language!";
    }

    //add the new name to the list
    //pull from LS
    //add new name
    //push back

    localStorage['name'] = JSON.stringify(instance.storedNames())
    counter()
}

function resetButton() {
    localStorage.clear();
    message.innerHTML = "";
    counterElem.innerHTML = ""; 

}



function counter() {
    counterElem.innerHTML = instance.nameCounter();
}

resetBtnElem.addEventListener('click', resetButton)
greetBtnElem.addEventListener('click', greetDisplayBtn);



