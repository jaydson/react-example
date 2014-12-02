module.exports = React.createClass({
	render: function() {
		return (
			<li key="1" className="category">{ this.props.text }</li>
		);
	}
});