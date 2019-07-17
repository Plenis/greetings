var textDisplay = document.querySelector(".personsName")
var greetBtnElem = document.querySelector(".greetBtn")
var greetElem = document.querySelector("#greet")
var nameCounterElem = document.querySelector("#nameCounter")
var storedNamesElem = document.querySelector("#storedNames")
var counterElem = document.querySelector(".counter")
var resetBtnElem = document.querySelector(".resetBtn");

if(localStorage['name']){
   var nameStore = (localStorage['name']);
}
else {
    nameStore = [];
}


var message = document.querySelector('.msg');
var instance = greetingOpp(nameStore); 

function greetDisplayBtn(){
var personsName = document.querySelector(".personsName")
var name = personsName.value;
var lang = document.querySelector("input[name= 'myLang']:checked");
var language = lang.value;

message.innerHTML = instance.greet(name, language);
//add the new name to the list

//pull from LS
//add new name
//push back



localStorage['name'] = JSON.stringify(instance.storedNames())
counter();
}

// function countName(name){
//     // console.log(greetedNames)
//     instance.greetedNames.push(name);
//     localStorage.setItem("name",JSON.stringify(instance.storedNames()));
// }

function resetButton(){
localStorage.clear();
message.innerHTML = "";
}



function counter(){
    counterElem.innerHTML = instance.nameCounter();
}
resetBtnElem.addEventListener('click', resetButton)
greetBtnElem.addEventListener('click', greetDisplayBtn);

    

