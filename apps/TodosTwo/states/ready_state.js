TodosTwo.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    TodosTwo.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    TodosTwo.getPath('mainPage.mainPane').remove();
  }

});

