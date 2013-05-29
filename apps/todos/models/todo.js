sc_require('core');

Todos.Todo = SC.Record.extend({
	timestamp: SC.Record.attr(SC.DateTime),
	isCompleted: SC.Record.attr(Boolean),
	title: SC.Record.attr(String)
});
