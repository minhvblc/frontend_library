import React, { Component } from "react";
import {
  Container,
  NavDropdown,
  Navbar,
  Nav,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login+Logout.css";
import "../css/NavBar.css";
import {Link} from "react-router-dom";
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
                <Nav.Link as={Link} to="/">Trang chủ</Nav.Link>
                <Nav.Link as={Link} to="/tracuu">Tra cứu sách</Nav.Link>
                <Nav.Link as={Link} to="/giosach">Giỏ sách của bạn</Nav.Link>
                <NavDropdown title="Quản lý sách" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to="/quanly/dangmuon">
                    Đang mượn
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/quanly/damuon">
                    Đã mượn
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to="/quanly/muonsach">
                    Mượn sách
                  </NavDropdown.Item>
                </NavDropdown>
                <NavDropdown title="Cá nhân" id="basic-nav-dropdown">
                  <NavDropdown.Item  as={Link} to="/user/info">
                    Thông tin cá nhân
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item to="/user/logout">
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
