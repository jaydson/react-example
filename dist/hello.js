(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var CardImg = require('./CardImg');
var CategoryList = require('./CategoryList');
var CardTitle = require('./CardTitle');

module.exports = React.createClass({displayName: 'exports',
	render: function() {
		return (
				React.createElement("div", {className: "card"}, 
					React.createElement(CardImg, {src:  this.props.image}), 
					React.createElement(CategoryList, {list:  this.props.categories}), 
					React.createElement(CardTitle, {text:  this.props.title}), 
					 this.props.content
				)
		);
	}
});
},{"./CardImg":2,"./CardTitle":3,"./CategoryList":5}],2:[function(require,module,exports){
module.exports =  React.createClass({displayName: 'exports',
	render: function() {
		return (
			React.createElement("img", {src:  this.props.src})
		);
	}
});
},{}],3:[function(require,module,exports){
module.exports = React.createClass({displayName: 'exports',
	render: function() {
		return (
			React.createElement("div", {className: "title"},  this.props.text)
		);
	}
});
},{}],4:[function(require,module,exports){
module.exports = React.createClass({displayName: 'exports',
	render: function() {
		return (
			React.createElement("li", {className: "category"},  this.props.text)
		);
	}
});
},{}],5:[function(require,module,exports){
var Category = require('./Category');

module.exports = React.createClass({displayName: 'exports',
	render: function() {
		var categories = [];
		this.props.list.forEach(function(category) {
			categories.push(React.createElement(Category, {text: category }));
		});

		return (
			React.createElement("div", {className: "categories"}, 
				React.createElement("ul", null, categories )
			)
		);
	}
});
},{"./Category":4}],6:[function(require,module,exports){
var Card = require('./Card');

module.exports = React.createClass({displayName: 'exports',
	render: function() {
		var cards = [];
		this.props.cards.forEach(function(card) {
			cards.push(React.createElement(Card, {title:  card.title, categories:  card.categories, image:  card.image}));
		});

		return (
			React.createElement("div", null, cards )
		);
	}
});
},{"./Card":1}],7:[function(require,module,exports){
var Viewport = require('./components/Viewport');

React.render(
	React.createElement(Viewport, {cards: cards }),
	document.querySelector('#viewport')
);
},{"./components/Viewport":6}]},{},[1,2,3,4,5,6,7]);
