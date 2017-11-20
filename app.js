// BUDGET CONTROLLER
var budgetController = (function() {
  //some code
})();

// UI CONTROLLER
var UIController = (function() {
  return {
    getinput: function() {
      return {
         type: document.querySelector('.add__type').value, // will be either inc or exp
         description: document.querySelector('.add__description').value,
         value: document.querySelector('.add__value').value,
      };
    }
  };
})();

// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {
  var ctrlAddItem = function(){
    // 1. Get the filled input data
    var input = UICtrl.getinput();
    console.log(input);
    // 2. add the item to the budget controller
    // 3. Add the item to the UI
    // 4. Caluculate the budget
    // 5. Display the budeget on the UI
  }

  document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function(event) {

    if (event.keyCode === 13) {
      ctrlAddItem();
    }

  });

})(budgetController, UIController);
