// Encapsulating the functionality in a module
const mathModule = (function() {
  // Private variable
  let localVar = 10;

  // Public methods
  return {
    addValue: function(x) {
      return x + localVar;
    },
    
    multiplyByLocal: function(y) {
      return y * localVar;
    },
    
    updateLocal: function(newValue) {
      localVar = newValue;
    },
    
    // Getter for the local variable (if needed)
    getLocalVar: function() {
      return localVar;
    }
  };
})();

// Example usage
console.log(mathModule.addValue(5)); // Output: 15
console.log(mathModule.multiplyByLocal(2)); // Output: 20
mathModule.updateLocal(5);
console.log(mathModule.addValue(5)); // Output: 10