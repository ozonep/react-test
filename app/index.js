import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import css from './style.css';
import App from './components/App';

// App.propTypes = {
//     img: PropTypes.string.isRequired,
//     names: PropTypes.array.isRequired,
//     friend: PropTypes.bool.isRequired
// };

var baby = true;

function LogCheck(props) {
    console.log(props);
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <App/>;
    }
    return <Welcome/>;
}

ReactDOM.render(
    <LogCheck isLoggedIn={baby}/>,
    document.getElementById('app')
);