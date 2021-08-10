import ListBook from "./ListBook";

import FormInputBook from "./FormInputBook";
import UserInfo from "./UserInfo";
import Home from "./Home";
import BookList from "../model/Book";
import Login from "./Login";
import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import ThongKe from "./ThongKe";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { Container } from "react-bootstrap";
import UserInfoUpdate from "./UserInfoupdate"

const book = [
  new BookList("Sach van", "Nguyen Van A", "Kim dong"),
  new BookList("Sach toan", "Nguyen Van B", "Kim dong"),
  new BookList("Truyen cuoi", "Nguyen Van C", "Kim dong"),
  new BookList("Truyen ngu ngon", "Nguyen Van D", "Kim dong"),
  new BookList("Truyen doremon", "Nguyen Van E", "Kim dong"),
  new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
  new BookList("Sach dia", "Nguyen Van H", "Kim dong"),
  new BookList("Sach su", "Nguyen Van I", "Kim dong"),
  new BookList("Sach ly", "Nguyen Van K", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van L", "Kim dong"),
  new BookList("Truyen tranh", "Nguyen Van M", "Kim dong"),
];
const book1 = [
  new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
  new BookList("Sach dia", "Nguyen Van H", "Kim dong"),
  new BookList("Sach su", "Nguyen Van I", "Kim dong"),
  new BookList("Sach ly", "Nguyen Van K", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van L", "Kim dong"),
  new BookList("Truyen tranh", "Nguyen Van M", "Kim dong"),
];
const book2 = [
  new BookList("Sach van", "Nguyen Van A", "Kim dong"),
  new BookList("Sach toan", "Nguyen Van B", "Kim dong"),
  new BookList("Truyen cuoi", "Nguyen Van C", "Kim dong"),
  new BookList("Truyen ngu ngon", "Nguyen Van D", "Kim dong"),
  new BookList("Truyen doremon", "Nguyen Van E", "Kim dong"),
  new BookList("Sach tham khao", "Nguyen Van F", "Kim dong"),
  new BookList("Sach hoa", "Nguyen Van G", "Kim dong"),
  new BookList("Sach dia", "Nguyen Van H", "Kim dong"),
];
export default class MainView extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/thongke"
            render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar fluid style={{ padiing: 0 }} />

                  <ThongKe />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>
          <Route path="/quanly/UserInfoUpdate" render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar fluid style={{ padiing: 0 }} />

                  <UserInfoUpdate />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}>
            
          </Route>
          <Route path="/quanly/suasach"  render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar fluid style={{ padiing: 0 }} />

                  <FormInputBook />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}>
            
          </Route>

          <Route
            path="/giosach"
            render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar />

                  <ListBook listBooks={book1} />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>

          <Route
            path="/quanly/themsach"
            render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar />
                  <FormInputBook />{" "}
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>

          <Route
            path="/quanly/danhsach"
            render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar />

                  <ListBook listBooks={book1} />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>

          <Route
            path="/user/info"
            render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar />

                  <UserInfo />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>

          <Route
            path="/home"
            render={() => {
              return localStorage.getItem("accessToken") != null ? (
                <Container fluid style={{ padding: 0 }}>
                  <NavigationBar />

                  <Home />
                </Container>
              ) : (
                <Redirect to="/" />
              );
            }}
          ></Route>

          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </Router>
    );
  }
}
