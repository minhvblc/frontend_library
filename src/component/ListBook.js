import React, { Component } from "react";
import { Table } from "react-bootstrap";
export default class ListBook extends Component {
  render() {
    return (
      <Table>
        <thead>
          <tr>
            <th>Tên sách</th>
            <th>Tác giả</th>
            <th>Nhà xuất bản</th>
          </tr>
        </thead>
        <tbody>
        {this.props.listBooks.map((book) => {
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
    );
  }
}
