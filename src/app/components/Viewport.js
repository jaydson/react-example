var Card = require('./Card');

module.exports = React.createClass({

	render: function() {
		var cards = [];
		this.props.cards.forEach(function(card) {
			cards.push(<Card title={ card.title } categories={ card.categories } image={ card.image } />);
		});

		return (
			<div>{ cards }</div>
		);
	}
});