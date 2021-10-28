import "./App.css";

import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          
          <Switch>
            <Route exact path="/">
            <News key="gen" pageSize={8} cat="general" country="in" />
            </Route>
            <Route exact path="/business">
            <News key="budiness" pageSize={8} cat="business" country="in" />
            </Route>
            <Route exact path="/entertainment">
            <News key ="entertainment"pageSize={8} cat="entertainment" country="in" />
            </Route>
            <Route exact path="/general">
            <News key="genral"exact pageSize={8} cat="general" country="in" />
            </Route>
            <Route exact path="/health">
            <News key="health"pageSize={8} cat="health" country="in" />
            </Route>
            <Route exact path="/science">
            <News key="science"pageSize={8} cat="science" country="in" />
            </Route>
            <Route exact path="/sports">
            <News key="sports"pageSize={8} cat="sports" country="in" />
            </Route>
            <Route exact path="/technology">
            <News key="technology"pageSize={8} cat="technology" country="in" />
            </Route>
            
          </Switch>
        </Router>
      </div>
    );
  }
}
