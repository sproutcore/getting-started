Todos.READY = SC.State.design({
	enterState: function () {
		// Will load from local storage here. Set to todosController.
		// For now, still load with fixtures for development.
		
		if (SC.instanceOf(Todos.store.dataSource, SC.FixturesDataSource)) {
			Todos.todosController.set('content',
			  Todos.store.find(SC.Query.local(Todos.Todo, { orderBy: 'timestamp DESC' })));
			Todos.completedTodosController.set('content',
			  Todos.store.find(SC.Query.local(Todos.Todo, 'isCompleted = true')));
		} else {
		    this.gotoState('LOGGING_IN');
		}
			
		//Todos.get('userDefaults').defaults({
			//"UserDefaults:todos": []
		//});

		//Todos.todosController.set('content', 'Todos.userDefaults.todos');
	},
 
	// Unless we write something, we won't get callback like this after loading from local storage.
	didLoad: function () {
		if (Todos.todosController.get('status') === SC.Record.READY_CLEAN) {
			this.gotoState('SHOWING_APP');
		}
	}.stateObserves('Todos.todosController.status'),

	exitState: function() {
		// Nothing to worry about here.
	}
});
