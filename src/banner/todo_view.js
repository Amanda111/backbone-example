var Backbone = require("Backbone");
var _ = require('underscore');

var todo_view = Backbone.View.extend({
	el:$('#app'),
	tagName:  'li'
})

module.exports = todo_view;