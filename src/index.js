import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
//
import {Router, Route, Switch} from 'react-router';
import createbrowserhistory from 'history/createBrowserHistory';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//
import Home from './components/Home.js';
import ListaPlanetas from './components/ListaPlanetas.js';
import ListaPersonagens from './components/ListaPersonagens.js';

const history= createbrowserhistory();

ReactDOM.render(
    <MuiThemeProvider>
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/planetas" component={ListaPlanetas}/>
                <Route path="/personagens" component={ListaPersonagens}/>
            </Switch>
        </Router>
    </MuiThemeProvider>
    , document.getElementById('root'));
registerServiceWorker();
