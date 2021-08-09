import React, { Component } from "react";
import { Container, Table } from "react-bootstrap";
import Footer from "./Footer";
export default class ListBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : "",
      data : this.props.listBooks,
    }
  }
  handleSearchbar = (e) => {
    this.setState({searchText: e.target.value});
    const filterData = this.props.listBooks.filter(book => book.name.includes(e.target.value));
    this.setState({data : filterData});
    
  }
  render() {
    return (
      <Container>
        <input type="text" placeholder="Search" onChange={this.handleSearchbar}></input>
      <Table style={{marginBottom: 400}}>
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
          </tr>
          );
        })}
        </tbody>
        
      </Table>
      <Footer/>
      </Container>
     
    );
  }
}
