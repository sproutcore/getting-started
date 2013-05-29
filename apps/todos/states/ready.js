Todos.READY = SC.State.design({
	enterState: function() {
		if (SC.instanceOf(Todos.store.dataSource, SC.FixturesDataSource)) {
			Todos.todosController.set('content',
				Todos.store.find(SC.Query.local(Todos.Todo, { orderBy: 'timestamp DESC' })));
			Todos.completedTodosController.set('content',
				Todos.store.find(SC.Query.local(Todos.Todo, 'isCompleted = true')));
		} else {
			this.gotoState('LOGGING_IN');
		}
	},
 
	didLoad: function () {
		if (Todos.todosController.get('status') === SC.Record.READY_CLEAN) {
			this.gotoState('SHOWING_APP');
		}
	}.stateObserves('Todos.todosController.status'),

	exitState: function() {
		// Nothing to worry about here.
	}
});
