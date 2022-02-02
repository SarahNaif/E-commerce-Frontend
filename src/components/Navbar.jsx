import { useState } from "react"
import { Badge } from "@material-ui/core";
import {   Search, ShoppingBasketOutlined,FavoriteBorderOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import React from 'react'
import styled from "styled-components";
import Modal from "./Modal";
import {mobile} from "../responsive";
import Quickview from "./Quickview";


const Container = styled.div`
  height: 60px;
  ${mobile({ 
    height:"50px"
  })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  border-radius:9px;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  ${mobile({ display:"none" })}

`;

const Input = styled.input`
  border: none;
  
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
   ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 15px;
  color: #373737;
  line-height: 6px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
`;
const Button = styled.button`
 background-color: transparent;
 border: none;
`;
const Navbar = () => {
  const [showModal,setShowModal]=useState(false)
  const openModel = () => {
    setShowModal(prev => !prev)
    console.log("clicked");
  }
    return (
        <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
              <Input placeholder="Search" />
              <Search style={{ color: "gray", fontSize: 16 }} />
            </SearchContainer>
          </Left>
          <Center>
            <Logo>LAMA.</Logo>
          </Center>

          <Right>

            <Button onClick={openModel}>
              
            <MenuItem><PersonOutlineOutlined style={{ fontSize: 29 }}/></MenuItem>
            </Button>
           
            <Modal showModal={showModal} setShowModal={setShowModal}/>
            {/* <Quickview showModal={showModal} setShowModal={setShowModal}/> */}
            
            <Badge badgeContent={5} color="primary" >
            <MenuItem><FavoriteBorderOutlined/></MenuItem>
            </Badge>

            <MenuItem>
              <Badge badgeContent={4} color="primary">
                <ShoppingBasketOutlined />
              </Badge>
            </MenuItem>

          </Right>
        </Wrapper>
      </Container>
    )
}

export default Navbar
