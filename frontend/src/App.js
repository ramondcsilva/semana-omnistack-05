import React, {Component} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Login from './Pages/Login'
import Timeline from './Pages/Timeline'

class App extends Component{
  render() {
    return (
      <BrowserRouter> 
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/timeline" component={Timeline} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
