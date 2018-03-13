/*
* @Author: Marte
* @Date:   2018-02-05 17:27:30
* @Last Modified by:   Marte
* @Last Modified time: 2018-02-08 18:46:41
*/


import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,NavLink,Redirect } from 'react-router-dom'
import Search from './pages/Search.js';
import Mine from './pages/Mine.js';
import Loadable from 'react-loadable';
import './App.css';
const Position = Loadable({
  loader: () => import('./pages/Position'),
  loading: () => <div>Loading...</div>,
});

class App_log extends Component{
    render(){
        return (
            <Router>
            <div>
        <header className="header" id="header">拉勾网</header>
            <div id="content">
            <Switch>
                <Route path="/position"  component={Position}   />
                <Route path="/searchiserror"  component={Search}   />
                <Route path="/users"  component={Mine}   />
                <Redirect exact path ="/" to="/position" ></Redirect>
            </Switch>

            </div>

            <footer id="footer">
            <ul>
            <li><NavLink activeClassName="selector" to="/position"><i className="iconfont">&#xe620;</i>职位</NavLink></li>
            <li><NavLink to="/searchiserror" activeClassName="selector"><i className="iconfont">&#xe60a;</i>搜索</NavLink></li>
            <li><NavLink to="/users" activeClassName="selector"><i className="iconfont">&#xe60f;</i>我的</NavLink></li>

            </ul>
            </footer>
            </div>
            </Router>
            )
    }
}

export default App_log;