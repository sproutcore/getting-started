Todos = SC.Application.create(
	/** @scope Todos.prototype */ {
 
	NAMESPACE: 'Todos',
	VERSION: '0.1.0',
 
	/** Create initial user defaults */
	userDefaults: SC.UserDefaults.create({ appDomain: "UserDefaults" }),

    store: SC.Store.create().from(SC.FixturesDataSource.create({
        simulateRemoteResponse: YES,
        latency: 250
    }))
});
