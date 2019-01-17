TodosThree.statechart = SC.Statechart.create({

  trace: YES,
 
  rootState: SC.State.design({
    initialSubstate: "READY",
 
    READY: SC.State.plugin('TodosThree.READY'),
      
    LOGGING_IN: SC.State.plugin('TodosThree.LOGGING_IN'),

    SHOWING_APP: SC.State.plugin('TodosThree.SHOWING_APP'),

    SHOWING_DESTROY_CONFIRMATION: SC.State.plugin('TodosThree.SHOWING_DESTROY_CONFIRMATION')
  })

});