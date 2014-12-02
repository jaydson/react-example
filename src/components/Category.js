module.exports = React.createClass({
	render: function() {
		return (
			<li className="category">{ this.props.text }</li>
		);
	}
});