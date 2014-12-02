var Category = require('./Category');

module.exports = React.createClass({
	render: function() {
		var categories = [];
		this.props.list.forEach(function(category) {
			categories.push(<Category text={ category } />);
		});

		return (
			<div className="categories">
				<ul>{ categories }</ul>
			</div>
		);
	}
});