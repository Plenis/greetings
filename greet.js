function greetingOpp(nameList) {
    var greetedNames = nameList || {};
    

    function greet(name, lang) {
      var firstLetterUpperCase = name.toUpperCase().charAt(0) + name.slice(1);
        if(greetedNames[firstLetterUpperCase] === undefined){
            greetedNames[firstLetterUpperCase] = 1;
        } else{
            greetedNames[firstLetterUpperCase] ++;
        }

        if (lang === 'isiXhosa') {
            return 'Molo, ' + firstLetterUpperCase + "!" ;
        }

        else if (lang === 'English') {
            return 'Hello, ' + firstLetterUpperCase + "!" ;
        }

        else if (lang === 'Afrikaans') {
            return 'Awe, ' + firstLetterUpperCase + "!" ;
        }
        else {
            return "Please select language";
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

        var noNameLang = 0;
        if(noNameLang === "" && lang === false){
            return "Please enter name and select language!"
        }
    }

    return {
        greet,
        storedNames,
        nameCounter,
        errorMsg
       
    }
}
