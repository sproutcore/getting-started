sc_require('models/todo');

Todos.Todo.FIXTURES = [
	{
	guid: 0,
	isCompleted: NO,
	title: 'General -- Almost done for hiding #main and #footer, but there should be a little spacing above the input when it exists by itself. Do these references to #main and #footer need to be in the html as anchors, or are these just references?'
	},
	{
	guid: 1,
	isCompleted: NO,
	title: 'Readme -- Write it when dust settles. If fixtures is not used in the todomvc rendition of SproutCore todos, take note. And also, link to the SproutCore Getting-Started guides and the todos app there.'
	},
	{
	guid: 2,
	isCompleted: NO,
	title: 'UX -- This general requirement, that it work like the template, will be done when all the items in the spec are completed, to the extent appropriate for SproutCore.'
	},
	{
	guid: 3,
	isCompleted: NO,
	title: 'Compatibility -- Check the list of required browsers to support. Does SC offer required browser support?'
	},
	{
	guid: 4,
	isCompleted: NO,
	title: 'Structure -- The bower_components directory contains base.css, base.js, bg.png. Do we need to use this? Especially for CSS -- do we need to adapt as best we can for use in SproutCore todos?'
	},
	{
	guid: 5,
	isCompleted: NO,
	title: 'Code -- Same question from Structure section about use of base.css and app.css.'
	},
	{
	guid: 6,
	isCompleted: NO,
	title: 'Persistence -- Use SproutCore local storage. Is it important to showcase SproutCore fixtures, with example todos loaded initially? Or, just remove fixtures altogether and initial app load has no todos?'
	},
	{
	guid: 7,
	isCompleted: NO,
	title: 'Routing -- Use SproutCore routing for #/, #/active, #/completed, and do required filtering and displays.'
	},
	{
	guid: 8,
	isCompleted: NO,
	title: 'Item -- Add an item edit state to handle editing on double-click.'
	},
	{
	guid: 9,
	isCompleted: NO,
	title: 'Item -- Add an "X" icon and button that should appear on hovering over a todo item.'
	},
	{
	guid: 10,
	isCompleted: NO,
	title: 'Editing -- A new editing state should hide #main, list, and #footer, destroy if empty input, discard on escape. What about blur vs. enter?'
	},
	{
	guid: 11,
	isCompleted: NO,
	title: 'Counter -- Add a label to the todos counter (e.g., 1 item left, singular, and 2 items left, plural). Assure <strong> tag around Counter number.'
	},
	{
	guid: 12,
	isCompleted: YES,
	title: 'Code Style -- Edit files for using tabs as required, instead of spaces.'
	},
	{
	guid: 13,
	isCompleted: YES,
	title: 'New todo -- New todos are entered in the input at the top of the app. Pressing Enter creates the todo, appends it to the todo list and clears the input. Make sure to .trim() the input and then check that it is not empty before creating a new todo.'
	},
	{
	guid: 14,
	isCompleted: YES,
	title: 'Mark all as complete -- Checkbox toggles all the todos to the same state as itself. Make sure to clear the checked state after the the "Clear completed" button is clicked. The "Mark all as complete" checkbox should also be updated when single todo items are checked/unchecked. Eg. When all the todos are checked it should also get checked.'
	},
	{
	guid: 15,
	isCompleted: YES,
	title: 'Todo Item -- Clicking the checkbox marks the todo as complete by updating it is completed value and toggling the class completed on its parent <li>.'
	}
];
