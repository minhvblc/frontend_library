import React, { Component } from "react";
import {Form, Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Login+Logout.css';
import Footer from "./Footer";
export default class Register extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Địa chỉ mail</Form.Label>
            <Form.Control type="email" placeholder="Nhập email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Mật khẩu</Form.Label>
            <Form.Control type="password" placeholder="Nhập mật khẩu" />
          </Form.Group>
          <Button variant="primary" type="submit" style={{marginBottom: 400}}> 
            Đăng ký
          </Button>
        </Form>
        <Footer/>
      </div>
    );
  }
}
