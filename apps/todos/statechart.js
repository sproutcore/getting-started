Todos.statechart = SC.Statechart.create({

	trace: YES,
 
	rootState: SC.State.design({
		initialSubstate: 'READY',
 
		READY: SC.State.plugin('Todos.READY'),
			
		LOGGING_IN: SC.State.plugin('Todos.LOGGING_IN'),

		SHOWING_APP: SC.State.plugin('Todos.SHOWING_APP'),

		SHOWING_DESTROY_CONFIRMATION: SC.State.plugin('Todos.SHOWING_DESTROY_CONFIRMATION')
	})

});
