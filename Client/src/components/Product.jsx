
import { FavoriteBorderOutlined, RemoveRedEyeOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import React ,{useState}from 'react'
import styled from "styled-components";
import Quickview from './Quickview';


const Info = styled.div `
    opacity:0 ;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index:3;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
    cursor: pointer;

`
const Container = styled.div `
     flex: 1 ;
     flex-wrap:wrap;
     margin: 10px;
     min-width: 280px;
     height: 350px;
     display: flex;
     align-items: center;
     justify-content:space-between;
     background-color: #f0f0f0;
     position: relative;
     &:hover ${Info} {
         opacity: 1;
         background-color: #98969623;
     }
    
` 
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.5;
  position: absolute;
  margin-left: 30px;
`; 
const Image = styled.img `
     height: 95%;
     z-index: 2;
` 
 
const Icon = styled.div `
   width: 40px;
   height: 40px;
   border-radius: 50%;
   background-color: white;
   display: flex;
   align-items: center;
   justify-content: center;
   margin: 10px;
   transition: all 0.5s ease;
   cursor: pointer;
   &:hover {
       
       transform: scale(1.3);
   }
` 
const Button = styled.button`
 background-color: transparent;
 border: none;
`;

const Product = ({item,key}) => {
const [showModel,setshowModel]=useState(false)
const openModel = () => {
 setshowModel(prev => !prev)
 console.log("me 2")
}



    return (
        <Container>
            <Quickview showModel={showModel} setshowModel={setshowModel} item={item} key={key}/>
            <Circle/>
            <Image src={item.img}/>
            <Info>
                 <Icon>
                     <ShoppingCartOutlined/>
                 </Icon>
                 <Button >
                 <Icon>
                     
                     <RemoveRedEyeOutlined onClick={openModel}/>
                     
                 </Icon>
                 </Button>
                
                 <Icon>
                     <FavoriteBorderOutlined/>
                 </Icon>
            </Info>
            
        </Container>
    )
}

export default Product
