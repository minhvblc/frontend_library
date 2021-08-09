import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
import Footer from "./Footer";
export default function UserInfo() {
  const [name, setName] = useState("Unknown");
  const [email, setEmail] = useState("Unknown");
  return (
    
      <Container>
        <Row style = {{padding: 10}}>
          <label style = {{padding: 10}}>Họ và tên: </label>
          <label style = {{padding: 10}}>{name}</label>
        </Row>
        <Row style = {{padding: 10}}>
          <label style = {{padding: 10}}>Địa chỉ email:</label>
          <label style = {{padding: 10}}>{email}</label>
        </Row>
        <Button style={{marginBottom: 400}}>Thay đổi thông tin</Button>
        <Footer/>
      </Container>
    
  );
}
