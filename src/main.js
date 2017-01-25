var Backbone = require("Backbone");
var view = require('./view.js');

var TodoView = new view.todo_view;
document.querySelector('#app').append(TodoView.render().el);