var Backbone = require("Backbone");
var view = require('./view.js');
var model = require('./todo/todo.js');
var collection = require('./todo/todos.js');

new model();
new collection();
var TodoView = new view.todo_view;
