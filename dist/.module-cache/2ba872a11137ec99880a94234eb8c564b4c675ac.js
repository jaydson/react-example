var Card = React.createClass({displayName: 'Card',
    render: function() {
        return (React.createElement("div", null, " ", this.props.category));
    }
});

React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);