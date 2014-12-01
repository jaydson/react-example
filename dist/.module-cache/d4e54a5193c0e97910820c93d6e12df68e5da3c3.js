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
		return (
			React.createElement("div", null,  this.props.text)
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