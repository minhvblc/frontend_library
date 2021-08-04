import React from "react";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Row, Button } from "react-bootstrap";
export default function UserInfo() {
  const [name, setName] = useState("Unknown");
  const [email, setEmail] = useState("Unknown");
  return (
    
      <Container>
        <Row>
          <label>Họ và tên: </label>
          <label>{name}</label>
        </Row>
        <Row>
          <label>Địa chỉ email:</label>
          <label>{email}</label>
        </Row>
        <Button>Thay đổi thông tin</Button>
      </Container>
    
  );
}
