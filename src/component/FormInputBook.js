import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login+Logout.css";
import BookModel from "../model/BookModel";
import { tsImportEqualsDeclaration } from "@babel/types";
import Footer from "./Footer";
export default class FormInputBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: "",
      publisherId: "",
      nxb: "",
      author: "",
    };
  }
  handleQuantityChange = (e) => {
    e.preventDefault();
    this.setState({ quantity: e.target.value });
  };
  handlePublisherIdChange = (e) => {
    e.preventDefault();
    this.setState({ publisherId: e.target.value });
  };
  handleNXBChange = (e) => {
    e.preventDefault();
    this.setState({ nxb: e.target.value });
  };
  handleNameChange = (e) => {
    e.preventDefault();
    this.setState({ name: e.target.value });
    console.log(this.state.name);
  };
  handleAuthorChange = (e) => {
    e.preventDefault();
    this.setState({ author: e.target.value });
    console.log(this.state.name);
  };
  submitBook = () => {
    window.alert(this.state.name);
    console.log(this.state.name);
    console.log("aaaaaa");
  };
  render() {
    return (
      
        <Container  fluid style = {{padding:0}}>
          <Form fluid  style={{ marginTop: 100 }}>
            <Form.Group className="mb-3" controlId="formBookName">
              <Form.Label>Tên sách</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tên sách"
                onChange={this.handleNameChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookQuantity">
              <Form.Label>Số lượng sách</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleQuantityChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookNXB">
              <Form.Label>Nhà xuất bản</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleNXBChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBookAuthor">
              <Form.Label>Tác giả</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleAuthorChange}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onSubmit={this.submitBook}>
              Gửi
            </Button>
            
          </Form>
          <Footer />
        </Container>
     
    );
  }
}
