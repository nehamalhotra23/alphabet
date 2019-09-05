import { Alphabet } from './../src/template.js'

  describe('Alphabet', function() {
    it('expect fail/it doesnt return letter', function() {
      let letter = "a";
     var alphabet1 = new Alphabet(letter);

      expect(alphabet1.letter).toEqual(letter)
    })

  })
