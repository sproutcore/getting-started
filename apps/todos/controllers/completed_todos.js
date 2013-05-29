sc_require('controllers/todos');

Todos.completedTodosController = SC.ArrayController.create({

	totalTodosBinding: SC.Binding.oneWay('Todos.todosController.length'),

	areAllCompleted: function (k, v) {
		if (v !== undefined) {
			Todos.todosController.setEach('isCompleted', v);
		}
		return this.get('length') === this.get('totalTodos');
	}.property('length', 'totalTodos').cacheable()
});
