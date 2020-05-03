import React, { Component } from 'react';
import { Router } from 'react-router';
import { Route,Switch } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ToastContainer } from 'react-toastify';

import Home from './screens/HomeScreen';
import About from './screens/AboutScreen';
import Login from './screens/LoginScreen';
import Register from './screens/RegisterScreen';
import Dashboard from './screens/DashboardScreen';
import Admin from './screens/AdminScreen';
import Update from './screens/UpdateScreen';

export const history = createBrowserHistory()

/*
var express = require('express'); 
var app = express();
var bodyParser = require('body-parser'); 
var session = require('express-session');
//var db = require('./models/db.js');
var mysql = require('mysql');

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({
  extended: true
}));// Body parser use JSON data

if(window.globalThis.SQLpool === undefined){
//	window.globalThis.SQLpool = db.createPool(); //create a global sql pool connection
  window.globalThis.SQLpool = mysql.createPool({
  host: process.env.MYSQL_HOST_IP,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});
} 
app.use(require('./controllers'));
app.listen('3000', function(){
	console.log("Connected on port 3000.");
});
*/

class App extends Component {


  render() {
    return (
      <div className="App">
      <ToastContainer/>
      <Router history={history}>
        <div>
          <Switch>
            <Route exact path="/" component={ Home }/>
            <Route exact path="/about" component={ About }/>
            <Route exact path="/login" component={ Login }/>
            <Route exact path="/register" component={ Register }/>
            <Route path="/order" component={ Dashboard } />
            <Route path="/admin" component={ Admin } />
            <Route path="/update" component={ Update } />
          </Switch>
        </div>
      </Router>
      </div>
    )
  }
}


export default App
