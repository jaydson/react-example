var CardImg = require('./CardImg');
var CategoryList = require('./CategoryList');
var CardTitle = require('./CardTitle');

module.exports = React.createClass({
	render: function() {
		return (
				<div className="card">
					<CardImg src={ this.props.image } />
					<CategoryList list= { this.props.categories } />
					<CardTitle text={ this.props.title } />
					{ this.props.content }
				</div>
		);
	}
});