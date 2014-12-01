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
		this.props.categories.forEach(function(category) {
			categories.push(React.createElement(Category, {text:  category.text}));
		});

		return (
			React.createElement("div", null, categories )
		);
	}
});

var Card = React.createClass({displayName: 'Card',
	render: function() {
		return (
				React.createElement("div", null, 
					React.createElement("span", null,  this.props.title), 
						 this.props.content
				)
		);
	}
});

React.render(
  React.createElement(Card, {title: "Hello"}),
  document.getElementById('hello')
);
React.render(
  React.createElement(Card, {title: "Inusitado"}),
  document.getElementById('inusitado')
);
React.render(
  React.createElement(Card, {title: "Bunda"}),
  document.getElementById('bunda')
);
React.render(
  React.createElement(Card, {title: "Teta"}),
  document.getElementById('teta')
);