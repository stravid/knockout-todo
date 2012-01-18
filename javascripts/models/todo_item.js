var todoItemModel = function(text) {
  this.text = ko.observable(text);
  this.isFinished = ko.observable(false);
  this.isEditing = ko.observable(false);

  this.doubleClickHandler = function(element, event) {
    if (!this.isFinished()) {
       this.isEditing(true);
    }
  };

  this.clickHandler = function(element, event) {
    this.save();
  };

  this.keyUpHandler = function(element, event) {
    if (event.keyCode == 13) {
      this.save();
    }
  };

  this.save = function() {
    if (this.text().length > 0) {
      this.isEditing(false);
    }
  };
};