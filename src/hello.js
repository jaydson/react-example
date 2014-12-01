var Img = React.createClass({
	render: function() {
		return (
			<img src={ this.props.src } />
		);
	}
});

var Category = React.createClass({
	render: function() {
		return (
			<div>{ this.props.text }</div>
		);
	}
});

var Card = React.createClass({
	render: function() {
		var categories = [];
		this.props.categories.forEach(function(category) {
			categories.push(<Category text={ category } />);
		});
		return (
				<div className="card">
					<Img src="xxx.png" />
					<div>{ categories }</div>
					<span>{ this.props.title }</span>
					{ this.props.content }
				</div>
		);
	}
});

var Viewport = React.createClass({
	render: function() {
		var cards = [];
		this.props.cards.forEach(function(card) {
			cards.push(<Card title={ card.title } categories={ card.categories } />);
		});

		return (
			<div>{ cards }</div>
		);
	}
});

var cards = [ {
	title : 'Jogo do Gremio',
	categories: ['esportes','gaucho','rs']
},
{
	title : 'Dilma fala',
	categories: ['politica','brasil']
}];

React.render(
	<Viewport cards={ cards } />,
	document.querySelector('#viewport')
);