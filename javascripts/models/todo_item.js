/*
  The model representing a todo item. It stores the data and
  manages the editing process.
*/
var todoItemModel = function(text) {
  // Make the attributes observable for the views
  this.text = ko.observable(text);
  this.isFinished = ko.observable(false);
  this.isEditing = ko.observable(false);

  /*
    Enables the editing mode if the todo item is not marked as finished.
  */
  this.doubleClickHandler = function(element, event) {
    if (!this.isFinished()) {
       this.isEditing(true);
    }
  };

  this.clickHandler = function(element, event) {
    this.save();
  };

  /*
    Checks if the user pressed the Enter key before calling the
    save method.
  */
  this.keyUpHandler = function(element, event) {
    if (event.keyCode == 13) {
      this.save();
    }
  };

  /*
    Disables the editing mode if the new text has a minimum length of 1 character.
  */
  this.save = function() {
    if (this.text().length > 0) {
      this.isEditing(false);
    }
  };
};