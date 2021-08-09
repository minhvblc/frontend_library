import React, { Component } from "react";
import { Container, NavDropdown, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/NavBar.css";
import logo from "../asset/books.png";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { useHistory } from "react-router";

export default function NavigationBar() {
  let history = useHistory();
  return (
    <div>
      <Navbar
        expand="lg"
        style={{
          width: "100px !important",
          backgroundColor: "#f2dcb3",
        }}
      >
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <img
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Brand as={Link} to="/home">
            Thư viện trực tuyến
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/home">
                Trang chủ
              </Nav.Link>
              <Nav.Link as={Link} to="/thongke">
                Thống kê
              </Nav.Link>

              <NavDropdown title="Quản lý sách" id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/quanly/themsach">
                  Thêm sách
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/quanly/danhsach">
                  Danh sách
                </NavDropdown.Item>
              </NavDropdown>

              <NavDropdown
                align="end"
                id="dropdown-menu-align-right"
                title="Cá nhân"
                className="ml-auto"
                pullRight
              >
                <Nav className="ml-auto" pullRight>
                  <NavDropdown.Item as={Link} to="/user/info">
                    Thông tin cá nhân
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    to="/user/logout"
                    onClick={() => {
                      localStorage.removeItem("accessToken");

                      history.replace("/");
                    }}
                  >
                    Đăng xuất
                  </NavDropdown.Item>
                </Nav>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
