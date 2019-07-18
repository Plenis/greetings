 describe('greet' , function(){
    it('should greet name inserted' , function(){
        let input = greetingOpp();
        input.greet('Sino')
        assert.equal('Sino', input.storedNames());
    })
    
    it('should greet name in isiXhosa, if isiXhosa is selected' , function(){
        let input = greetingOpp();
        assert.equal('Molo, Sino', input.greet('Sino', 'isiXhosa'));
        assert.equal(1, input.nameCounter())
    })

    it('should greet name in English, if English is selected' , function(){
        let input = greetingOpp();
        assert.equal('Hello, Sino', input.greet('Sino', 'English'));
        assert.equal(1, input.nameCounter())
    })

    it('should greet name in Afrikaans, if Afrikaans is selected' , function(){
        let input = greetingOpp();
        assert.equal('Awe, Sino', input.greet('Sino', 'Afrikaans'));
        assert.equal(1, input.nameCounter())
    })

    
 
});
