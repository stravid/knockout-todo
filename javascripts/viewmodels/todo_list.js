var todoListViewModel = {
  inputText: ko.observable(""),
  todoItems: ko.observableArray(),
  keyUpHandler: function(element, event) {
    if (event.keyCode == 13) {
      this.createTodoItem();
    }
  },
  clickHandler: function(element, event) {
    this.createTodoItem();
  },
  createTodoItem: function() {
    if (this.inputText().length > 0) {
      this.todoItems.push(new todoItemModel(this.inputText()));
      this.inputText("");
    }
  },
  removeTodoItem: function(element, event) {
    todoListViewModel.todoItems.remove(element);
  }
};