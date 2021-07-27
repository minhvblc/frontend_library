import React, { Component } from 'react'
import Login from './component/Login'
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/NavigationBar';
import ListBook from './component/ListBook';
import Book from './model/Book';
import MuonSach from './component/MuonSach';
const book = [new Book("Sach", "Minh", "Kim dong"), new Book("Sach", "Minh", "Kim dong"), new Book("Sach", "Minh", "Kim dong")];
export default class App extends Component {
  render() {
    return (
      <Container style={{
        width: "100%",
        height: "100%",
      }}>
        <NavigationBar/>
        <ListBook listBooks={book}/>
        <MuonSach/>
      </Container>

    )
  }
}
