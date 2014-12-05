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
					<h1>{ this.props.title }</h1>
					<div onClick={ this.close } className="close">X</div>
					{ this.props.content }
				</div>
		);
	}
});