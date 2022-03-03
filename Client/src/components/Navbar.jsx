import { useState } from "react"
import { Badge } from "@material-ui/core";
import { ShoppingBasketOutlined, PersonOutlineOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Modal from "./Modal";
import {mobile} from "../responsive";



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


const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const ListNav = styled.ul`
  display: flex;
  justify-content:space-evenly;
  font-size:1.2rem;
 
li{
  display: flex;
  justify-content:space-evenly;
  list-style: none;
  font-weight: 500;

}
`
const Navlink = styled(Link)`
   text-decoration: none;
   color: black;
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
            <Logo>LAMA.</Logo>
          </Left>

          <Center>
            <ListNav>
              <li><Navlink to="/">Home</Navlink></li>
              {/* <li><Navlink to="/products">Products</Navlink></li> */}
            </ListNav>
          </Center>

          <Right>
            <Button onClick={openModel}>
              <MenuItem>
                <PersonOutlineOutlined style={{ fontSize: 29 }} />
              </MenuItem>
            </Button>

            <Modal showModal={showModal} setShowModal={setShowModal} />
            <MenuItem>
            <Navlink to="/Cart" >
            <Badge  color="primary">
                <ShoppingBasketOutlined />
              </Badge>
            </Navlink>
             
            </MenuItem>
          </Right>
        </Wrapper>
      </Container>
    );
}

export default Navbar
