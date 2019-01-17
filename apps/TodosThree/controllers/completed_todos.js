sc_require('controllers/todos');

TodosThree.completedTodosController = SC.ArrayController.create({

  totalTodosBinding: SC.Binding.oneWay('TodosThree.todosController.length'),

  areAllCompleted: function (k, v) {
    if (v !== undefined) {
      TodosThree.todosController.setEach('isCompleted', v);
    }
    return this.get('length') === this.get('totalTodos');
  }.property('length', 'totalTodos').cacheable()
});