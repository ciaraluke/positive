
/*
 * Layout View - Main view container for the Stream
 */

define(['backbone', 'handlebars', 'underscore', 'marionette', 'views/stream_view'
    ],

    function(Backbone, Handlebars, _, Marionette, StreamView
    ) {

        'use strict';

        var Layout = Backbone.Marionette.Layout.extend({
            el: '.container',

            regions: {
                stream: "#stream",
            },

            initialize: function(options) {
                this.streamItems = options.streamItems;
                this.streamItem = options.streamItem;
                console.log(this.streamItems);
            },

            // showStreamViews: function() {
            //      this.stream.show(new StreamView({
            //          model: this.streamItem
            //      }));
            //  },

            showStreamView: function() {
                this.stream.show(new StreamView({
                    collection: this.streamItems
                }));
            }

        });

        return Layout;

    }
);
