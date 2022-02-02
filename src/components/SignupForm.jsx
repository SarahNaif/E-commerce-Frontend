import React from 'react'
import styled from "styled-components"



const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 60%;
  
`;
const Input = styled.input`
  flex: 1;
  /* min-width: 60%; */
  margin: 10px 0;
  padding: 10px;
`;
const Button = styled.button`
 color: white;
 cursor: pointer;
 padding: 10px 24px;
    background: #141414;
    color: #fff;
    border: none;
    min-width: 60%;
`;
const Link = styled.a`
  
`;
const SignupForm = () => {
    return (
        <Form>
                <Input placeholder="UserName"/>
                <Input placeholder="Password"/>
                <Input placeholder="Email"/>
                <Button>Register</Button>
                <hr data-content="OR"/>

              
                </Form>
    )
}

export default SignupForm
