import React, { Component } from "react";
import NavigationBarAdmin from "./NavigationBarAdmin";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Login from "./Login"
import ListBook from "./ListBook"
import MuonSach from "./MuonSach";

export default class MainView extends Component {
  render() {
    return (
      <Router>
        <NavigationBarAdmin />
        <Switch>
          <Route path="/">
            <MuonSach />
          </Route>
          <Route path="/thongke">
            <Login />
          </Route>
          <Route path="/hoadon">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}
