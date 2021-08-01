import React, { Component } from 'react'
import Login from './component/Login'
import { Container, ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './component/NavigationBar';
import ListBook from './component/ListBook';
import BookList from './model/Book';
import FormInputBook from './component/FormInputBook';
import MuonSach from './component/MuonSach';
import AuthorNXBDropDown from './component/AuthorNXBDropDown';
import MainView from './component/MainView';
const book = [new BookList("Sach", "Minh", "Kim dong"), new BookList("Sach", "Minh", "Kim dong"), new BookList("Sach", "Minh", "Kim dong")];
export default class App extends Component {
 
  render() {
    return (
      <Container fluid style={{
        padding: '0',
        backgroundImage: `url("./asset/background.jpg")`,
      }}>
        <MainView/>
      </Container>

    )
  }
}
