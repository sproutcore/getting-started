TodosThree.statechart = SC.Statechart.create({

  initialState: 'readyState',
  
  readyState: SC.State.plugin('TodosThree.ReadyState'),
  // someOtherState: SC.State.plugin('TodosThree.SomeOtherState')

});