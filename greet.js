function greetingOpp(nameList) {
    var greetedNames = nameList || {};
    

    function greet(name, lang) {
      var firstLetterUpperCase = name.toUpperCase();
      var firstLetterUpper = name.toUpperCase() 
        if(greetedNames[firstLetterUpper] === undefined){
            greetedNames[firstLetterUpper] = 1;
        } else{
            greetedNames[firstLetterUpper] ++;
        }

        if (lang === 'isiXhosa') {
            return 'MOLO, ' + firstLetterUpperCase + "!" ;
        }

        else if (lang === 'English') {
            return 'HELLO, ' + firstLetterUpperCase + "!" ;
        }

        else if (lang === 'Afrikaans') {
            return 'AWE, ' + firstLetterUpperCase + "!" ;
        }
        else {
            return "Please select language";
        }

    };

    function capitalize_Words(str)
{
 return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

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
        errorMsg,
        capitalize_Words
       
    }
}
