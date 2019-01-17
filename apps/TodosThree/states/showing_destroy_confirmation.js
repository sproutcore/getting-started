TodosThree.SHOWING_DESTROY_CONFIRMATION = SC.State.design({
  _panel: null,

  enterState: function() {
    var displayDescription = "Are you sure that you wish to clear the following tasks?<br /><br />";
    var completedTodos = TodosThree.completedTodosController;

    displayDescription += "<ul>";
    displayDescription += completedTodos.map(function(t) { return "<li>%@</li>".fmt(t.get('title')); }).join('\n');
    displayDescription += "</ul>";

    this._panel = SC.AlertPane.warn({
      layout: { centerX: 0, top: 80, width: 380, bottom: 80 },

      defaultResponder: TodosThree.statechart,

      message: "Clear Completed Todos",
      displayDescription: displayDescription,

      buttons: [
        { title: 'Clear', action: 'confirm' },
        { title: 'Cancel', action: 'cancel' }
      ]
    });
  },
 
  exitState: function() {
    // No need to do anything here, the SC.AlertPane will remove itself.
  },

  confirm: function() {
    TodosThree.completedTodosController.invoke('destroy');
    this.gotoState('SHOWING_APP');
  },

  cancel: function() {
    this.gotoState('SHOWING_APP');
  }
});