import React, { useState,useEffect } from 'react'
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
  cursor: pointer;
`;



const LoginForm = () => {

    const [openForgt, setOpenForgt] = useState(false);
    const btnValue = () => {
      if (openForgt === true) {
        return "Rest";
      } else {
        return "Login";
      }
    };
    const [btn, setBtn] = useState(null);
    useEffect(() => {
      setBtn(btnValue());
    }, [openForgt]);






    return (
      <Form>
        {openForgt ? (
          <>
            <Input placeholder="Email" />
            <Button>{btn}</Button>
          </>
        ) : (
          <>
            <Input placeholder="UserName" />
            <Input placeholder="Password" />
            <Button>{btn}</Button>
          </>
        )}
        <Link onClick={() => setOpenForgt((prev) => !prev)}>
          Forget The Password.?
        </Link>
        <hr data-content="OR" />
      </Form>
    );
}

export default LoginForm
