sc_require('controllers/todos');

Todos.completedTodosController = SC.ArrayController.create({

	totalTodosBinding: SC.Binding.oneWay('Todos.todosController.length'),

  // TODO: There should be an activeTodosController, at which point simply change all references to this
  // to activeTodosController.length
  activeTodosCount: function() {
    return this.get('totalTodos') - this.get('length');
  }.property('totalTodos', 'length').cacheable(),

	areAllCompleted: function (k, v) {
		if (v !== undefined) {
			Todos.todosController.setEach('isCompleted', v);
		}
		return this.get('length') === this.get('totalTodos');
	}.property('length', 'totalTodos').cacheable()
});
