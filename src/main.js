var Backbone = require("Backbone");
var todo_view = require('./views/todo_view.js');

var TodoView = new todo_view();
document.querySelector('#app').append(TodoView.render().el);