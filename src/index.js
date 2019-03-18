import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//
import {Router, Route, Switch} from 'react-router';
import createbrowserhistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import ListaPlanetas from './components/ListaPlanetas.js';
import ListaPersonagens from './components/ListaPersonagens.js';
import Home from './components/Home.js';

const history= createbrowserhistory();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/personagens" component={ListaPersonagens}/>
                <Route path="/planetas" component={ListaPlanetas}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
