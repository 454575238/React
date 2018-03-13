import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect } from 'react-router-dom'
import Loadable from 'react-loadable';
import './App.css';
import App_log from "./App_log.js";
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Jobs from './pages/Jobs.js';
class App extends Component {
  render() {
    return (
      <Router>

        <div className="App">
        <Switch>


               <Route  path="/jobs/:id" component={Jobs} />
             <Route  path="/login" component={Login} />
              <Route  path="/register" component={Register} />

               <Route path="/" component={App_log} />
        </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
