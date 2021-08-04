import React, { Component } from "react";
import {
  Form,
  Button,
  Container,
  NavDropdown,
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login+Logout.css";
import "../css/NavBar.css";
import styled from 'styled-components'
import { Switch, Route, Link } from "react-router-dom";

export default class NavigationBarAdmin extends Component {
  
  render() {
    return (
      <div 
      >
        <Navbar  expand= "lg" style={{
            width: "100px !important" ,
            backgroundColor: "#f2dcb3",
        }}>
          <Container>
            <Navbar.Brand to="/">Thư viện trực tuyến</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                <Nav.Link  as={Link} to="/hoadon">Quản lý hoá đơn</Nav.Link>
                <Nav.Link  as={Link} to="/thongke">Thống kê</Nav.Link>
                <NavDropdown title="Quản lý sách" id="basic-nav-dropdown">
                  <NavDropdown.Item  as={Link} to="/quanly/add">
                    Thêm sách
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item  as={Link} to="/quanly/update" >
                    Sửa sách
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item  as={Link} to="/quanly/delete">
                    Xoá sách
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cá nhân" id="basic-nav-dropdown">
                  <NavDropdown.Item  as={Link} to="/user/info">
                    Thông tin cá nhân
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item  as={Link} to="/user/logout">
                    Đăng xuất
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
