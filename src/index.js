import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//
import {Router, Route, Switch} from 'react-router';
import createbrowserhistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import Home from './components/Home';

const history= createbrowserhistory();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route path="/" component={Home}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
