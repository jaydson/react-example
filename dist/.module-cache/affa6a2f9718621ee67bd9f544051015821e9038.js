var Img = React.createClass({displayName: 'Img',
	render: function() {
		return (
			React.createElement("img", {src: "{ this.props.src }"})
		);
	}
});

var Category = React.createClass({displayName: 'Category',
	render: function() {
		return (
			React.createElement("div", null,  this.props.text)
		);
	}
});

var Categories = React.createClass({displayName: 'Categories',
	render: function() {
		var categories = [];
		this.props.category.forEach(function(category) {
			categories.push(React.createElement(Category, {text:  category.text}));
		});

		return (
			React.createElement("div", null, categories )
		);
	}
});

var Card = React.createClass({displayName: 'Card',
	render: function() {
		var categories = ['Foo', 'Bar'];
		return (
				React.createElement("div", null, 
					React.createElement(Img, {src: "xxx.png"}), 
					React.createElement(Categories, {category: categories}), 
					React.createElement("span", null,  this.props.title), 
					 this.props.content
				)
		);
	}
});

var Viewport = React.createClass({displayName: 'Viewport',
	render: function() {
		var cards = [];
		this.props.cards.forEach(function(card) {
			cards.push(React.createElement(Card, {title:  card.title}));
		});

		return (
			React.createElement("div", null, cards )
		);
	}
});


var cards = [ {
		title : 'Inusitado'
	},
	{

	}]
React.render(
	React.createElement(Viewport, {cards: ""}),
	document.getElementById('viewport')
);