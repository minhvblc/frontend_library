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
import FormInputBook from "./FormInputBook";
import UserInfo from "./UserInfo";
import Home from "./Home";
export default class MainView extends Component {
  render() {
    return (
      <Router>
        <NavigationBarAdmin />
        <Switch>
          <Route path="/hoadon">
            <Login />
          </Route>
          <Route path="/thongke">
            <MuonSach />
          </Route>
          <Route path='/quanly/add'>
            <FormInputBook/>
          </Route>
          <Route path='/quanly/delete'>
            <FormInputBook/>
          </Route>
          <Route path='/quanly/update'>
            <FormInputBook/>
          </Route>
          <Route path="/user/info">
            <UserInfo/>
          </Route>
          <Route path='/'>
            <Home/>
          </Route>
          
        </Switch>

      </Router>
    );
  }
}
