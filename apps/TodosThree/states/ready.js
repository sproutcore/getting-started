TodosThree.READY = SC.State.design({
  enterState: function() {
    if (SC.instanceOf(TodosThree.store.dataSource, SC.FixturesDataSource)) {
      var allTodos = TodosThree.store.find(SC.Query.local(TodosThree.Todo, { orderBy: 'timestamp DESC' }));
      TodosThree.todosController.set('content', allTodos);
      var completedTodos = TodosThree.store.find(SC.Query.local(TodosThree.Todo, { conditions: 'isCompleted = true' }));
      TodosThree.completedTodosController.set('content', completedTodos);
      this.gotoState('SHOWING_APP');
    } else {
      this.gotoState('LOGGING_IN');
    }
  },
 
  // didLoad: function () {
  //   if (TodosThree.todosController.get('status') === SC.Record.READY_CLEAN) {
  //     this.gotoState('SHOWING_APP');
  //   }
  // }.stateObserves('TodosThree.todosController.status'),

  exitState: function() {
    // Nothing to worry about here.
  }
});