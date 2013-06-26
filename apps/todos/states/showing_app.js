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
			// Save to local storage here.
			//Todos.store.createRecord(Todos.Todo, {
			//	title: todo,
			//	timestamp: SC.DateTime.create()
			//});
			Todos.get('userDefaults').get("UserDefaults:todos").push(todo);
		}
	},

	clearCompletedTodos: function() {
		this.gotoState('SHOWING_DESTROY_CONFIRMATION', this);
	}
});
