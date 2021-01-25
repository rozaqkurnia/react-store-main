import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ProtectedRoute } from './components/router/protected';

import Login from './pages/Login';
import Home from './pages/Home';
import Error from './pages/Error';

interface GuestRouteInterface {
  path: string
  component: any
  exact?: boolean
}

const guestRoutes: Array<GuestRouteInterface> = [
  { path: "/", component: Login, exact: true }
];

const protectedRoutes: Array<any> = [
  { path: "/home", component: Home, exact: true }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {
              guestRoutes.map((route, key) => {
                return <Route exact={route.exact} path={route.path} component={route.component} key={key} />
              })
            }
            {
              protectedRoutes.map((route, key) => {
                return <ProtectedRoute exact={route.exact} path={route.path} component={route.component} key={key} />
              })
            }
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
