import React from 'react';
import logo from './logo.svg';
import Users from './components/users';
import Loginto from './components/loginto';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';


export default function App() {

function Login() {
  return <Loginto/>;
}

function register() {
  return <Users/>;
}

  return (
    <div>
      <div className="App">
      <header className="App-header">
    
          <Router>
            <div>
              <Switch>
              <Route path="/register">
                  {register}
                </Route>
                <Route path="/">
                  {Login}
                </Route>
                </Switch>
                <div>
              <Link to="/register">New User ? Register</Link>
              </div>
            </div>
          </Router>
        </header>
      </div>
    </div>
  );
}