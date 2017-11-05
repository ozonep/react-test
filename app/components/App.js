import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from './Nav';
import Popular from './Popular';
import Home from './Home';
import Battle from './Battle';

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <Nav/>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                        <Route path='/popular' component={Popular}/>
                        <Route path='/battle' component={Battle}/>
                        <Route render={() => {
                            return <p>Not found</p>
                        }}/>
                    </Switch>
                </div>
            </Router>
        )
    }
}
