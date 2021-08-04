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


export default class NavigationBar extends Component {
  
  render() {
    return (
      <div 
      >
        <Navbar  expand= "lg" style={{
            width: "100px !important" ,
            backgroundColor: "#f2dcb3",
        }}>
          <Container>
            <Navbar.Brand href="#home">Thư viện trực tuyến</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Trang chủ</Nav.Link>
                <Nav.Link href="#link">Tra cứu sách</Nav.Link>
                <Nav.Link href="#link">Giỏ sách của bạn</Nav.Link>
                <NavDropdown title="Quản lý sách" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Đang mượn
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
                    Đã mượn
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Mượn sách
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cá nhân" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    Thông tin cá nhân
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">
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
