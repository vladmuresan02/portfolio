import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './components/Homepage';
import Contact from './components/Contact';
import Showcase from './components/Showcase';
import About from './components/About';
import './style.css'


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path="/contact" component={Contact}/>
            <Route path="/showcase" component={Showcase}/>
            <Route path="/about" component={About}/>
            <Route path="/" component={Homepage}/>
        </Switch>
    </BrowserRouter>
    , document.querySelector('#app'));
