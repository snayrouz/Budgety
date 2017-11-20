// BUDGET CONTROLLER
var budgetController = (function() {
  //some code
})();

// UI CONTROLLER
var UIController = (function() {
  var DOMstrings = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputBtn: '.add__btn'
  };

  return {
    getinput: function() {
      return {
         type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp
         description: document.querySelector(DOMstrings.inputDescription).value,
         value: document.querySelector(DOMstrings.inputValue).value,
      };
    },

    getDOMStrings: function() {
      return DOMstrings;
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var DOM = UICtrl.getDOMStrings();
  var ctrlAddItem = function(){
    // 1. Get the filled input data
    var input = UICtrl.getinput();
    console.log(input);
    // 2. add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Caluculate the budget
    // 5. Display the budeget on the UI
  }

  document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
