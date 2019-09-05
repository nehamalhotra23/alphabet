import { Alphabet } from './../src/template.js'

  describe('Alphabet', function() {
    it('expect fail/it doesnt return letter', function() {
      let letter = "a";
     var alphabet1 = new Alphabet(letter);

      expect(alphabet1.letter).toEqual(letter)
    })

    it('expect pass/ userinput through letter', function() {
      let letter = "a";
      var alphabet1 = new Alphabet(letter);
      console.log(alphabet1);
      alphabet1.naMes();
      expect(alphabet1.letter).toEqual("a")
    })

    it('expect pass/ should check length of letter', function() {
       let letter = "this ia a test sentence";
       var alphabet1 = new Alphabet(letter);
       var newSentence = alphabet1.length;
       alphabet1.naMes();
         expect(alphabet1.newSentence).toEqual(newSentence);

    })

    it('should pass/ should add count characters in a sentence', function() {
      let letter = "this ia a test sentence";
       var alphabet1 = new Alphabet(letter);

       alphabet1.naMes();
        expect(letter.length).toEqual(letter.length);

    })


  })
