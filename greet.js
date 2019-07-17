function greetingOpp(nameList) {
    var greetedNames = nameList || [];
    

    function greet(name, lang) {
           var nameName = name.toUpperCase();
        if(greetedNames[nameName] === undefined){
            greetedNames[nameName] = 0;
        }
        else {
            greetedNames[nameName] = name;
        }

        if (lang === 'isiXhosa') {
            // countName(name);
            return 'Molo, ' + name;
        }

        else if (lang === 'English') {
            // countName(name);
            return 'Hello, ' + name;
        }

        else if (lang === 'Afrikaans') {
            // countName(name);
            return 'Awe, ' + name;
        }

    };

    function nameCounter(){
         let greetedArrayJson = localStorage.getItem("name");
         greetedArray = JSON.parse(greetedArrayJson);
        return greetedArray.length;
        // var namesEntered = Object.keys(greetedNames);
        // console.log("names length : "+namesEntered.length)
        // return namesEntered.length;
    }


    function storedNames() {
        return greetedNames;
    }
    
    return {
        greet,
        storedNames,
        nameCounter
       
    }
}
