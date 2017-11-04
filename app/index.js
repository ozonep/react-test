const React = require('react');
const ReactDOM = require('react-dom');
const PropTypes = require('prop-types');
require('./style.css');
const App = require('./components/App');

App.propTypes = {
    img: PropTypes.string.isRequired,
    names: PropTypes.array.isRequired,
    friend: PropTypes.bool.isRequired
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
);