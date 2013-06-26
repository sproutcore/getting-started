sc_require('resources/todo_item');

Todos.mainPage = SC.Page.design({
	field: SC.outlet('mainPane.newTodoField.field'),

	mainPane: SC.MainPane.design({
		childViews: ['todosLabel', 'newTodoField', 'todosList', 'footer'],
		defaultResponder: "Todos.statechart", 

		// For todomvc, there is a <header> that has what is called here
		// todosLabel and newTodoField.
		
		todosLabel: SC.LabelView.design({
			layout: { centerX: 0, top: 0, width: 100, height: 60, zIndex: 100 },
			controlSize: SC.LARGE_CONTROL_SIZE,
			value: 'Todos'
		}),

		newTodoField: SC.View.design({
			classNames: ['new-todo'],
			layout: { centerX: 0, width: 500, top: 66, height: 36 },

			childViews: ['field', 'button'],

			field: SC.TextFieldView.design({
				hint: 'What needs to be done?'
			}),

			button: SC.ButtonView.design(SC.AutoResize, {
				controlSize: SC.HUGE_CONTROL_SIZE,
				layout: { centerY: 0, height: 30, right: 12, zIndex: 100 },
				title: 'Add',
				action: 'addTodo',
				valueBinding: '.page.field.value',
				isDefaultBinding: '.page.field.focused'
			})
		}),
		
		// TODO: todosList for todomvc should not take up the balance of the
		// page, but should size to the number of todos.
		
		todosList: SC.ScrollView.design({
			layout: { centerX: 0, width: 500, top: 108, bottom: 36 },

			isVisibleBinding: SC.Binding.from('Todos.todosController.length').bool(),
			isEnabled: YES,
			canEditContent: YES,
			canDeleteContent: YES,

			contentView: SC.ListView.design({
				contentBinding: SC.Binding.oneWay('Todos.todosController'),
				rowHeight: 36,
				exampleView: SC.CheckboxView.design({
					classNames: ['todo-item'],
					valueBinding: '.content.isCompleted',
					titleBinding: SC.Binding.oneWay('.content.title')
					//isHovering: NO,
					//displayProperties: 'isHovering'.w(),
					//mouseEntered: function() {
						//this.set('isHovering', YES);
					//},
					//mouseExited: function() {
						//this.set('isHovering', NO);
					//}
				})
			})
		}),
				
		footer: SC.ToolbarView.design({
			layout: { centerX: 0, width: 500, bottom: 0, height: 36 },

			childViews: ['activeLabel', 'filters', 'clearCompletedTodos'],

			isVisibleBinding: SC.Binding.from('Todos.todosController.length').bool(),

			// TODO: activeLabel needs styling, so that the number is in bold, but
			// not the rest of the label. The todomvc CSS has it. (h1 styling).
			
			activeLabel: SC.LabelView.design({
				layout: { centerY: 0, height: 30, width: 100, left: 12, zIndex: 100 },

				totalTodosBinding: SC.Binding.oneWay('Todos.todosController.length'),
				completedTodosBinding: SC.Binding.oneWay('Todos.completedTodosController.length'),

				value: function() {
					var active, items_word;

					active = this.get('totalTodos') - this.get('completedTodos');

					if (active == 1) {
						items_word = 'item';
					} else {
						items_word = 'items';
					}
					return '' + active + ' ' + items_word + ' left';
				}.property('totalTodos', 'completedTodos').cacheable()
			}),

			filters: SC.SegmentedView.extend({
				layout: { width: 190, height: 30, centerX: 0, centerY: 0 },
				items: ['All', 'Active', 'Completed'],
				action: 'list_filter_changed',
				value: ['All']
			}),

			clearCompletedTodos: SC.ButtonView.design(SC.AutoResize, {
				//controlSize: SC.HUGE_CONTROL_SIZE,
				layout: { centerY: 0, height: 30, width: 80, right: 12, zIndex: 100 },
				isVisibleBinding: SC.Binding.oneWay('Todos.completedTodosController.length').bool(),
				title: 'Clear completed',
				action: 'clearCompletedTodos'
			})
		})
	})

});
