TodosThree = SC.Application.create(
  /** @scope TodosThree.prototype */ {
 
  NAMESPACE: 'TodosThree',
  VERSION: '0.1.0',
 
  store: SC.Store.create().from(SC.FixturesDataSource.create({
    simulateRemoteResponse: YES,
    latency: 250
  }))
});