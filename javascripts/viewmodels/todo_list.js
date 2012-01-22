/*
  The View Model of the todo application.
  It is responsible for offering data to the views
  and removing / creating todo items.
*/
var todoListViewModel = {
  // Make the attributes observable for the views
  inputText: ko.observable(""),
  todoItems: ko.observableArray(),

  /*
    Gets called on every keyup event of the input field
    and checks if it is the Enter key.
  */
  keyUpHandler: function(element, event) {
    if (event.keyCode == 13) {
      this.createTodoItem();
    }
  },
  clickHandler: function(element, event) {
    this.createTodoItem();
  },

  /* 
    Creates a new todo item if the text has the minimum length of one
    character. It also resets the input field.
  */
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