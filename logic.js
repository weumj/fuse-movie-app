const Observable = require('FuseJS/Observable');
const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

const dataSource = Observable();

(async () => {
	const response = await fetch(REQUEST_URL);

	dataSource.value = await response.json();
})();

module.exports = {
	dataSource,
};