TodosTwo.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('TodosTwo.ReadyState'),
  // someOtherState: SC.State.plugin('TodosTwo.SomeOtherState')

});