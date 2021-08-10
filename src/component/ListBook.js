import React, { Component } from "react";
import { Form,Button,Container, Table,  NavDropdown, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login+Logout.css";
import BookModel from "../model/BookModel";
import { tsImportEqualsDeclaration } from "@babel/types";
import Footer from "./Footer";
import FormInputBook from "./FormInputBook";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "../css/NavBar.css";
import logo from "../asset/books.png";


import styled from "styled-components";

export default class ListBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: "",
      publisherId: "",
      nxb: "",
      author: "",
      searchText : "",
      data : this.props.listBooks,
    }
  }
  deleteBook = (book) => {
    console.log(book)
   
  
    const index = this.state.data.indexOf(book)
    console.log(index)
    this.setState({
      data : this.state.data.filter(function(item) {
        return item !== book
    })
    })
  
    
  }
  
  render() {
    return (
      <Container>
        <input type="text" placeholder="Search" onChange={this.handleSearchbar}></input>
      <Table>
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Nhà xuất bản</th>
          </tr>
        </thead>
        <tbody>
        {this.state.data.map((book) => {
          return (
            <tr>
            <td>{book.name}</td>
            <td>{book.author}</td>
            <td>{book.nxb}</td>
            <td> <a href="/quanly/suasach">Sửa</a></td>
            <td><button  onClick={(e) => { if (window.confirm('Bạn muốn xoá sách?')) this.deleteBook(book) } }>
              Xóa
</button></td>

          </tr>
          
          );
        })}
        </tbody>
        
      </Table>
      </Container>
      
    );
  }
}