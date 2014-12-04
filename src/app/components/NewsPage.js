module.exports = React.createClass({
	close: function() {
		var Viewport = require('./Viewport');
		this.getDOMNode().classList.add('animated', 'fadeOutDownBig');
		history.pushState({}, "page", "/");

		setTimeout(function() {
			React.render(
				<Viewport cards={ cards } />,
				document.querySelector('#viewport')
			);
		}, 400);
	},

	render: function() {
		return (	
				<div className="page">
					<span onClick={ this.close } className="close">X</span>
					{ this.props.content }
				</div>
		);
	}
});