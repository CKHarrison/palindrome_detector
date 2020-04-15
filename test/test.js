let assert = require('assert');
let Phrase = require('../index.js');

describe("Phrase", () => {

  describe("#palindrome", () => {
    it("should return false for a non-palindrome", () => {
      let nonPalindrome = new Phrase("apple");
      assert(!nonPalindrome.palindrome());
    });

    it("should return true for a palindrome", () => {
      let plainPalindrome = new Phrase("racecar");
      assert(plainPalindrome.palindrome());
    });

    it("should return true for a mixed-case palindrome", () => {
      let mixedPalindrome = new Phrase("RaCecAr");
      assert(mixedPalindrome.palindrome());
    }); 

    it("should return true for a palindrome with punctuation", () => {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert(punctuatedPalindrome.palindrome());
    });
  });

  describe("#letters", () => {
    it("should return only letters", () => {
      let punctuatedPalindrome = new Phrase("Madam, I'm Adam.");
      assert.strictEqual(punctuatedPalindrome.letters(), "MadamImAdam");
    });

    it("should return the empty string on no match", () => {
      let noLetters = new Phrase("1234.56");
      assert.strictEqual(noLetters.letters(), "");
    });
  });
});