var Card = React.createClass({displayName: 'Card',
    render: function() {
        return (
        		React.createElement("div", null, 
        			React.createElement("span", null, this.props.title), 
        			this.props.content
        		)
        );
    }
});

React.render(
  React.createElement(Card, {title: "Inusitado"}),
  document.getElementById('example')
);