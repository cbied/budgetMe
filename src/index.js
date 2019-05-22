import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import Budget from './Budget'
import Contact from './Contact'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Switch>  
            <Route exact path="/" component={App}/>
            <Route path="/Budget" component={Budget}/>
            <Route path="/Contact" component={Contact}/>
        </Switch>
    </Router>, 
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
