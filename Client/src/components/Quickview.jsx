import { useState, } from "react"
import { Close } from "@material-ui/icons";
import { Link,useParams } from "react-router-dom";
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
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  padding: 5px 2px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items:center;
  justify-content: center;  
  border-radius: 10px;
  
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
  cursor: pointer;
  padding: 10px 24px;
  margin:15px 0;
  background: #141414;
  color: #fff;
  border: none;
  min-width: 80%;
  &:nth-of-type(2){
    background: white;
    border: solid 2px black ;
  }
  
`;
const Linkto = styled(Link)`
   text-decoration: none;
   color: black;
`;
const ModalImgWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content:flex-start;
    padding:9px 20px;
    max-height: 400px;
   
`;
const ModalImg = styled.img`
  max-height:100%; 
  max-width:100%;
  
`;
const Text = styled.h5`
  margin: 8px 0;
  font-weight: 600;
  line-height: 1.4;
  font-size: 1.9rem;
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
  
  const [count, setCount] = useState(0);

    return (
      <>
        {showModel ? (
          <Background>

            <ModalWrapper key={key}>
                <ModalImgWrapper >
                <ModalImg src={item.img} />
                </ModalImgWrapper>
              
              <ModalContent>
                {/* if true do it if not nothing  */}
                {/*    {item.stock === 0 && <span>Out Stock</span>} */}

                {item.stock === 0 && <span>Out Stock</span>}
                <Text>{item.title}</Text>
                <Text>${item.price}</Text>
                <label>Qty :</label>
                <Form>
                  
                  <BtnInput type="button" value="-" onClick={() => {

item.stock > 1 ? setCount(count - 1) : setCount(1);

}}field="quantity"
                  />
                  <Input type="text" name="quantity" value={count}  />

                  <BtnInput type="button" value="+" onClick={() =>  setCount(count + 1)} field="quantity"
                  />

                </Form>
                <Button>Add To Cart</Button>
                  
                <Button><Linkto to={`/product/${item.id}`}  >View Product</Linkto></Button>
                
               
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
