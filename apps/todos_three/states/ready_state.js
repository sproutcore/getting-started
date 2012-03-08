TodosThree.ReadyState = SC.State.extend({ 
  
  enterState: function() {
    TodosThree.getPath('mainPage.mainPane').append();
  },

  exitState: function() {
    TodosThree.getPath('mainPage.mainPane').remove();
  }

});

