import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
// import axios from 'axios'



const Signup = () => 
{

const [name,setName]=useState("")
const [email,setEmail]=useState("")

const [phone,setPhone]=useState("")
const [address,setAddr]=useState("")



 // form data submit
  const submitHandler = async (event) => {
    event.preventDefault();
    const submitForm = new FormData();
    submitForm.append("name", name);
    submitForm.append("email", email);
    submitForm.append("phone", phone);
    submitForm.append("address", address);

    

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify({
          name: 'name',
          email: 'email',
          userId: 11,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => console.log(json));

  }


  return (
    <>
    <div style={{padding:"5%"}}>
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder=""
                type="text" 
                onChange={(e) => setName(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder=""
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <FormGroup>
              <Label for="phone">Phone Number</Label>
              <Input
                id="phone"
                name="phone"
                placeholder=""
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>
          </Col>
          {/* <Col md={4}>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                id="password"
                name="password"
                placeholder="Type password"
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />
            </FormGroup>
          </Col>
          <Col md={4}>
            <FormGroup>
              <Label for="password">Confirm Password</Label>
              <Input
                id="password2"
                name="password"
                placeholder="Confirm Your password"
                type="password"
                onChange={(e) => setPass(e.target.value)}
              />
            </FormGroup>
          </Col> */}
        </Row>
        <FormGroup>
          <Label for="address">Address</Label>
          <Input
            id="address"
            name="address"
            placeholder="1234 Main St"
            onChange={(e) => setAddr(e.target.value)}
          />
        </FormGroup>
       
        
        <Button>Sign Up</Button>
      </Form>
      </div>
    </>
  );
};

export default Signup;
