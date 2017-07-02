/**
* Responsible for a cart item View logic
* @module CartItemView
*/
'use-strict';

const Backone = require('backbone');
const _ = require('underscore');
const $ = require('jquery');
const Handlebars = require('handlebars');
//'text!templates/cart-item.html'
//cartItemTemplate) {
let CartItemView = Backbone.View.extend({

	tagName: 'tr',
	className: 'CartItem',

	template: Handlebars.compile(cartItemTemplate),

	initialize: function initialize(options) {
		this.model = options && options.model || null;
		this.listenTo(this.model, 'change', this.render);
	},

	render: function render() {
		if(this.model) {
			var itemTmpl = this.template(this.model.toJSON());
			this.$el.html(itemTmpl);
		}
		return this;
	},

	// events: {
	// 	'click': 'click'
	// },

	// click: function click(e) {
	// 	e.preventDefault();
	// 	e.stopPropagation();

	// 	console.log('Hello World !');
	// }
});

exports.CartItemView = CartItemView;

