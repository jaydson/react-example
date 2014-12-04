var NewsPage = require('./NewsPage');

module.exports = React.createClass({

	handleClick: function() {
		var _this = this;
		var DOMCards = document.querySelectorAll('.card'),
			cards = [],
			interval = null;

		interval = setInterval(function() {
			if(cards.length > 0) {
				cards.pop().classList.add('animated', 'fadeOutLeftBig');
			} else {
				clearInterval(interval);
				var elem = React.render(
					<NewsPage content={ _this.props.data.content } className="page" />,
					document.querySelector('#viewport')
				);
				elem.getDOMNode().classList.add('animated', 'fadeInDownBig');
				history.pushState({}, "page",  _this.props.data.link );
			}
		}, 100);

		[].forEach.call(DOMCards, function(card) {
			cards.push(card);
		});
	},

	render: function() {
		return (
			<a onClick={ this.handleClick } className="title">{ this.props.text }</a>
		);
	}
});