import {Grid} from '@mui/material'
// import Das1 from ''
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Row, FormGroup, Label, Input, Col, Button } from "reactstrap";
import { useState } from "react";
import './style.css'
const LoginReg = () => {

    const [email,setEmail]=useState("")
    const [pass,setPass]=useState("")
    
    
    
    
     // form data submit
      const loginHandler = async (event) => {
        event.preventDefault();
        const loginForm = new FormData();
        loginForm.append("email", email);
        loginForm.append("pass", pass);
        console.log(loginForm)
    
      
      }

  return (
<>
<Grid container sx={{height:'90vh'}}>
    <Grid item lg={7} sm={5} sx={{
        // backgroundImage: `url(${Das1})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize:'cover',
        backgroundPosition:'center'

    }}>

    </Grid>
    <Grid>
    <div className="logindiv">
          <Form onSubmit={loginHandler}>
            <Row>
              <Col sm={12}>
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

            
           
            
            <Button>Login</Button>
          </Form>
          </div>
    </Grid>
</Grid>
</>
    )
}

export default LoginReg