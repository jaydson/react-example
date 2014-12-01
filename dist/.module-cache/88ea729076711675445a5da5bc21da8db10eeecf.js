var Img = React.createClass({displayName: 'Img',
	render: function() {
		return (
			React.createElement("img", {src:  this.props.src})
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

var Card = React.createClass({displayName: 'Card',
	render: function() {
		var categories = [];
		this.props.categories.forEach(function(category) {
			categories.push(React.createElement(Category, {text: category }));
		});
		return (
				React.createElement("div", {className: "card"}, 
					React.createElement(Img, {src: "xxx.png"}), 
					React.createElement("div", null, categories ), 
					React.createElement("span", null,  this.props.title), 
					 this.props.content
				)
		);
	}
});

var Viewport = React.createClass({displayName: 'Viewport',
	render: function() {
		var data = this.props.cards,
			cards = [];
		cards.forEach(function(card) {
			cards.push(React.createElement(Card, {title:  card.title}));
		});

		return (
			React.createElement("div", null, cards )
		);
	}
});

var cards = [{
	title : 'Jogo do Gremio',
	categories: ['esportes','gaucho','rs']
},
{
	title : 'Dilma fala',
	categories: ['politica','brasil']
}];

React.render(
	React.createElement(Viewport, {cards: cards }),
	document.querySelector('#viewport')
);