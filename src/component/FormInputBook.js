import React, { Component } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/Login+Logout.css";
import BookModel from "../model/BookModel";
import { tsImportEqualsDeclaration } from "@babel/types";

export default class FormInputBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      quantity: "",
      bookRankID: "",
      shortDesc: "",
      detaiDesc: "",
      publisherId: "",
      yearOfPublic: "",
      languageId: "",
      code: "",
    };
  }
  handleQuantityChange = (e) => {
    e.preventDefault()
    this.setState({ quantity: e.target.value });
  };
  handleBookRankIDChange = (e) => {
    e.preventDefault()
    this.setState({ bookRankID: e.target.value });
  };
  handleShortDescChange = (e) => {
    e.preventDefault()
    this.setState({ shortDesc: e.target.value });
  };
  handleDetaiDescChange = (e) => {
    e.preventDefault()
    this.setState({ detaiDesc: e.target.value });
  };
  handlePublisherIdChange = (e) => {
    e.preventDefault()
    this.setState({ publisherId: e.target.value });
  };
  handleYearOfPublicChange = (e) => {
    e.preventDefault()
    this.setState({ yearOfPublic: e.target.value });
  };
  handleLanguageIdChange = (e) => {
    e.preventDefault()
    this.setState({ languageId: e.target.value });
  };
  handleCodeChange = (e) => {
    e.preventDefault()
    this.setState({ code: e.target.value });
  };
  handleNameChange = (e) => {
    e.preventDefault()
    this.setState({ name: e.target.value });
    console.log(this.state.name)
  };
  submitBook = () => {
    window.alert(this.state.name);
    console.log(this.state.name)
  };
  render() {
    return (
      <div>
        <Container fluid className="bg">
          <Form>
            <Form.Group className="mb-3" controlId="formBookName">
              <Form.Label>Tên sáchl</Form.Label>
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
            <Form.Group className="mb-3" controlId="formBookRankId">
              <Form.Label>Book rank ID</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleBookRankIDChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookShortDesc">
              <Form.Label>Short Desc</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleShortDescChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookDetaiDesc">
              <Form.Label>Detail Desc</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleDetaiDescChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookPublisherId">
              <Form.Label>Publisher ID</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handlePublisherIdChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookYearOfPublic">
              <Form.Label>Year Of Public</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleYearOfPublicChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookLanguageId">
              <Form.Label>Language ID</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleLanguageIdChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBookCode">
              <Form.Label>Code</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                onChange={this.handleCodeChange}
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
             onSubmit = {this.submitBook}
            >
              Gửi
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}
