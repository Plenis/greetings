function greetingOpp(nameList) {
    var greetedNames = nameList || {};
    

    function greet(name, lang) {
      var nameName = name.toUpperCase().charAt(0) + name.slice(1);
        if(greetedNames[nameName] === undefined){
            greetedNames[nameName] = 0;
        }

        if (lang === 'isiXhosa') {
            return 'Molo, ' + name + "!";
        }

        else if (lang === 'English') {
            return 'Hello, ' + name + "!";
        }

        else if (lang === 'Afrikaans') {
            return 'Awe, ' + name + "!";
        }
        else {
            return "please select language";
        }

    };

    function nameCounter(){    
       var greetedArray = Object.keys(greetedNames);
        return greetedArray.length;
    }


    function storedNames() {
        return greetedNames;
    }

    function errorMsg(lang){
        var errmsg = name
        if(errmsg === "" && lang !== false){
            return "Please enter name!";
        }
    }

   // console.log(greetedNames)
    return {
        greet,
        storedNames,
        nameCounter,
        errorMsg,
        //errorMessage
       
    }
}
