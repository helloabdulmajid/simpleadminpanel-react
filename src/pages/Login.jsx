import React from "react";
import {Grid} from '@mui/material'

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
import './style.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import axios from 'axios'

const Das1 = "./assets/images/das1.png";


const Login = () => {

const [email,setEmail]=useState("")
const [pass,setPass]=useState("")

const notify = () => toast.success("Login Success",{
  position: "top-center",
});




 // form data submit
  const loginHandler = async (event) => {
    event.preventDefault();
    const loginForm = new FormData();
    loginForm.append("email", email);
    loginForm.append("pass", pass);
    console.log(email)

  
  }


  return (
    <>
    <Grid container sx={{height:'90vh'}}>
        <Grid item lg={7} sm={5} sx={{
            backgroundImage: `url(${Das1})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize:'cover',
            backgroundPosition:'center'
    
        }}>
    
        </Grid>
        <Grid>
        <div className="logindiv">
            <h3>Login Page</h3>
              <Form onSubmit={loginHandler} className="loginform">
                <Row>
                  <Col sm={12}>
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
    
                  <Col md={12}>
                   
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
                </Row>
    
                
               
                
                <Button className="btn" onClick={notify}>Login</Button>
                <ToastContainer />
              </Form>
              </div>
        </Grid>
    </Grid>
    </>
        )
    }
    

export default Login