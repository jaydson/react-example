var Viewport = require('./components/Viewport');
var Header = require('./components/Header');
var NewsPage = require('./components/NewsPage');

function render() {
	React.render(
		<Viewport cards={ cards } />,
		document.querySelector('#viewport')
	);
}

window.onload = function() {
	curNews = JSON.parse(window.localStorage.getItem('currentNews'));
	if (location.href.match(/\.html/)) {
		React.render(
			<NewsPage title={ curNews.title } content={ curNews.content } className="page" />,
			document.querySelector('#viewport')
		);
	}
}

window.onpopstate = function(event) {
	if (event.state && event.state.data) {
		React.render(
			<NewsPage content={ event.state.data.content } className="page" />,
			document.querySelector('#viewport')
		);
	} else {
		render();
	}
};

React.render(
	<Header />,
	document.querySelector('#header')
);

render();