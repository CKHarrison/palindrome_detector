module.exports = Phrase;
// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
   this.processedContent = function processedContent(){
    return this.processor(this.letters());
   };

   // Returns only the letters in this.content
   this.letters = function() {
     return (this.content.match(/[a-z]/gi) || []).join("");
   }

  // returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  //Louder method
  this.louder = function() {
    return this.content.toUpperCase();
  }
}


