var People = Backbone.Collection.extend({
            initialize: function (models, options) {
                    this.bind("add", options.view.addOneWorld);
            }
        });