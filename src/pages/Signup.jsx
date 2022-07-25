import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
// import '../components/style.css'
// import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => 
{
  const notify = () => toast.success("Registration Success",{
    position: "top-center",
  });

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
    <div className="signupdiv">
      <Form onSubmit={submitHandler}>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter Name"
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
                placeholder="Enter Email"
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
                placeholder="Enter Phone Number"
                type="number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </FormGroup>
          </Col>
          
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
       
        
        <Button className="btn" onClick={notify}>Sign Up</Button>
        <ToastContainer />

      </Form>
      </div>
    </>
  );
};

export default Signup;
