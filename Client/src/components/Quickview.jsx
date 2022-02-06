import { Close } from "@material-ui/icons";
import React from 'react'
import styled from "styled-components";

const Background = styled.div`
  top:0px;
  left:0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.55);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; 
`;
const ModalWrapper = styled.div`
  width: 800px;
  height: 600px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items:center;
  justify-content: center;  
  
`;
const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  line-height: 1.8;
  color: #141414;
  margin: 20px;

  span {
    background-color: #ea3253;
    color: white;
    margin: 25px 0 0;
    padding: 0 3px;
    min-width: 56px;
    font-weight: 500;
    font-size: 12px;
    text-transform: capitalize;
    text-align: center;
  }
`;


const Form = styled.div`
margin: 16px 0 ;
border: solid 1px black;
padding: 5px;
display: flex;

`;
const Input = styled.input`
font-size: 1.0em;
border: none;
text-align: center;
color: tomato;
width: 30px;

`;
const BtnInput = styled(Input)`
  background-color: transparent;
  cursor: pointer;
`;
const Button = styled.button`
  color: white;
  cursor: pointer;
  padding: 10px 24px;
  margin:15px 0;
  background: #141414;
  color: #fff;
  border: none;
  min-width: 80%;
`;
const ModalImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding-left: 20px;
`;
const ModalImg = styled.img`
  height: 85%;
`;
const Text = styled.h5`
  margin: 8px 0;
  font-weight: 600;
  line-height: 1.4;
  font-size: calc(20px + (24 - 20) * ((100vw - 575px) / 725));
`;
const CloseModalButton = styled(Close)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
`;


const Quickview = ({showModel,setshowModel,item,key}) => {
    return (
      <>
        {showModel ? (
          <Background>
{/* map */}
            <ModalWrapper key={key}>
                <ModalImgWrapper>
                <ModalImg src={item.img} />
                </ModalImgWrapper>
              
              <ModalContent>
                <span>Out Stock</span>
                <Text>Black Tiered Smock Mini Dress</Text>
                <Text>$50.00</Text>
                <label>Qty :</label>
                <Form>
                  
                  <BtnInput
                    type="button"
                    value="-"
                    field="quantity"
                  />
                  <Input type="text" name="quantity" value="1" />
                  <BtnInput
                    type="button"
                    value="+"
                    field="quantity"
                  />
                </Form>
                <Button>add to cart</Button>
              </ModalContent>
              <CloseModalButton
                aria-label="Close modal"
                onClick={() => setshowModel((prev) => !prev)}
              />
            </ModalWrapper>

          </Background>
        ) : null}
      </>
    );
};

export default Quickview
