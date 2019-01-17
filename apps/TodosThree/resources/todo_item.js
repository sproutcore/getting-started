TodosThree.TodoItemView = SC.CheckboxView.design({
  classNames: ['todo-item'],
  valueBinding: '.content.isCompleted',
  titleBinding: SC.Binding.oneWay('.content.title')
});