sc_require('resources/todo_item');

Todos.mainPage = SC.Page.design({
	field: SC.outlet('mainPane.newTodoField.field'),

	mainPane: SC.MainPane.design({
		childViews: ['header', 'newTodoField', 'todosList', 'footer'],
		defaultResponder: "Todos.statechart", 

		header: SC.ToolbarView.design({
			layout: function() {
				var isVisible = this.get('isVisible');

				if (isVisible === YES) {
					return { centerX: 0, width: 500, top: 0, height: 36 };
				} else {
					return { centerX: 0, width: 500, top: 0, height: 0 };
				}
			}.property('isVisible').cacheable(),

			childViews: ['title', 'completeAll'],

			isVisibleBinding: SC.Binding.from('Todos.todosController.length').bool(),

			completeAll: SC.CheckboxView.design(SC.AutoResize, {
				autoResizePadding: { width: 47 },
				title: 'Mark all as done',
				valueBinding: 'Todos.completedTodosController.areAllCompleted'
			}),

			title: SC.LabelView.design({
				layout: { left: 0, right: 0, top: 0, bottom: 0 },

				totalTodosBinding: SC.Binding.oneWay('Todos.todosController.length'),
				completedTodosBinding: SC.Binding.oneWay('Todos.completedTodosController.length'),

				value: function () {
					return 'Todos (' + (this.get('totalTodos') - this.get('completedTodos')) + ')';
				}.property('totalTodos', 'completedTodos').cacheable()
			})
		}),

		newTodoField: SC.View.design({
			classNames: ['new-todo'],
			layout: function() {
				var isHeaderPresent = this.get('isHeaderPresent');

				if (isHeaderPresent === YES) {
					return { centerX: 0, width: 500, top: 36, height: 36 };
				} else {
					return { centerX: 0, width: 500, top: 0, height: 36 };
				}
			}.property('isHeaderPresent').cacheable(),

			childViews: ['field', 'button'],

			isHeaderPresentBinding: SC.Binding.from('Todos.todosController.length').bool(),

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
		
		todosList: SC.ScrollView.design({
			layout: { centerX: 0, width: 500, top: 72, bottom: 36 },

			isVisibleBinding: SC.Binding.from('Todos.todosController.length').bool(),

			contentView: SC.ListView.design({
				contentBinding: SC.Binding.oneWay('Todos.todosController'),
				rowHeight: 36,
				exampleView: SC.CheckboxView.design({
					classNames: ['todo-item'],
					valueBinding: '.content.isCompleted',
					titleBinding: SC.Binding.oneWay('.content.title'),
                    isHovering: NO,
                    displayProperties: 'isHovering'.w(),
                    mouseEntered: function() {
                        this.set('isHovering', YES);
                    },
                    mouseExite: function() {
                        this.set('isHovering', NO);
                    }
				})
			})
		}),
				
		footer: SC.ToolbarView.design({
			layout: { centerX: 0, width: 500, bottom: 0, height: 36 },

			childViews: ['clearCompletedTodos'],

			isVisibleBinding: SC.Binding.from('Todos.todosController.length').bool(),

			clearCompletedTodos: SC.ButtonView.design(SC.AutoResize, {
				controlSize: SC.HUGE_CONTROL_SIZE,
				layout: { centerY: 0, height: 30, right: 12, zIndex: 100 },
				isEnabledBinding: SC.Binding.oneWay('Todos.completedTodosController.length').bool(),
				title: 'Clear completed todos',
				action: 'clearCompletedTodos'
			})
		})
	})

});
