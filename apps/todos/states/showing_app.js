Todos.SHOWING_APP = SC.State.design({
	enterState: function() {
		Todos.mainPage.get('mainPane').append();
		Todos.mainPage.get('field').becomeFirstResponder();
	},

	exitState: function() {
	},

	addTodo: function (view) {
		var todo = (view.get('value') || '').trim();
		if (todo !== '') {
			Todos.store.createRecord(Todos.Todo, {
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
