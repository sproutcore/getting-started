TodosThree.SHOWING_APP = SC.State.design({
  enterState: function() {
    TodosThree.mainPage.get('mainPane').append();
    TodosThree.mainPage.get('field').becomeFirstResponder();
  },

  exitState: function() {
  },

  addTodo: function (view) {
    var todo = (view.get('value') || '').trim();
    if (todo !== '') {
      TodosThree.store.createRecord(TodosThree.Todo, {
        title: todo,
        timestamp: SC.DateTime.create()
      });
      view.set('value', '');
    }
  },

  clearCompletedTodos: function() {
    this.gotoState('SHOWING_DESTROY_CONFIRMATION', this);
  }
});