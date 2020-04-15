// Adds `reverse` to all strings.
String.prototype.reverse = function reverse() {
  return Array.from(this).reverse().join("");
}
String.prototype.blank = function blank() {
  return !!this.match(/^\s*$/g);
}

// Defines a Phrase object
function Phrase(content) {
  this.content = content;

  this.processor = function(string) {
    return string.toLowerCase();
  }

  // Returns content processed for palindrome testing
   this.processedContent = function processedContent(){
    return this.processor(this.content);
   };


  // returns true for a palindrome, false otherwise
  this.palindrome = function palindrome() {
    return this.processedContent() === this.processedContent().reverse();
  }
  //Louder method
  this.louder = function() {
    return this.content.toUpperCase();
  }
}


