var Card = React.createClass({displayName: 'Card',
	render: function() {
		return (
				React.createElement("div", null, 
					React.createElement("span", null, this.props.title), 
						this.props.content
				)
		);
	}
});

React.render(
  React.createElement(Card, {title: "HelloAA"}),
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