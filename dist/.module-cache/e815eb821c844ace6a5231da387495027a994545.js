var Card = React.createClass({displayName: 'Card',
    render: function() {
        return (React.createElement("div", null, 
        			React.createElement("span", null, this.props.title)
        		));
    }
});

React.render(
  React.createElement("h1", null, "Hello, world!"),
  document.getElementById('example')
);