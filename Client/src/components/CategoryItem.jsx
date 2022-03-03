import React from 'react'
import { Link } from "react-router-dom";
import styled from "styled-components";

import {mobile} from "../responsive";
const Container = styled.div`
  ${mobile({  flexDirection:"column" })}
  display: flex;
  flex-wrap:wrap;
  margin: 3px;
  height: 50vh;
  position: relative;
  
  &:nth-child(1){
    
    flex: 2 1 25%;
  }
  &:nth-child(2){
    
    flex: 2 1 25%;
  }
  &:nth-child(3){
    
    flex: 2 1 25%;
    align-self: auto;
  }
 
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;

`;
const Info = styled.div`
position: absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: #333333;
margin-bottom: 20px;
`;

const Button = styled.button`
border: none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
`;
const Navlink = styled(Link)`
   text-decoration: none;
   
`;

const CategoryItem = ({item}) => {
    return (
      
      
      <Container>
        {/* */}
        <Image src={item.img} />
        <Info>
          <Title>{item.title}</Title>
           <Navlink to={`/products/${item.cat}`}>
          <Button>SHOP NOW</Button>
          </Navlink>
        </Info>
        
      </Container>
      
   
    );
}

export default CategoryItem
