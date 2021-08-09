import React, { Component } from "react";
import { Form, Button, Container, FormLabel, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '../css/Login+Logout.css';
import Footer from "./Footer";
import logo from "../asset/books.png";
import { useHistory } from "react-router-dom";


export default function Login() {
  let history = useHistory()
  return (
    <Container className = "bg" fluid style ={{padding:0}}>
      <Navbar
          expand="lg"
          style={{
            width: "100px !important",
            backgroundColor: "#f2dcb3",
          }}
        >
            <Navbar.Brand >
            <img
                src= {logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            <Navbar.Brand >
              Thư viện trực tuyến
            </Navbar.Brand>
     
        </Navbar>
        <Form style={{marginBottom: 300, marginTop:100}}>
          <h3 style={{marginBottom:30}}>Đăng nhập</h3>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Địa chỉ mail</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick = {() => {
            localStorage.setItem("accessToken", true)
           
            history.replace("/home")
          }}>
            Đăng nhập
          </Button>
        </Form>
        <Footer/>
      </Container>
  )
}
