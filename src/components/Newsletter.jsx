import { Send,EmailOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  height: 30vh;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  background-color: #efefef;
  padding: 0px 60px;
  color: #000;
`;
const TextContainer = styled.div`
padding: 0 ;
display: flex;
flex-direction: column;

`;
const Title = styled.h1`
  font-size: 24px;
font-weight: 700;

`;
const Des = styled.p`
  font-size: 14px;
  font-weight: 400;
  margin: 8px 0 0;
`;

const InputContainer = styled.div`
  width: 43%;
  height: 50px;
  background-color: white;
  display: flex;
  position: relative;
  border: 1px solid lightgray;
  margin: 10px 0 0;
  
`;
const InputIcon = styled(EmailOutlined)`
  cursor: pointer;
  position: absolute;
  top: 14px;
  left: 10px;
  width: 32px;
  height: 32px;
  color: #4f4f4f;
  
`;


const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 45px;
  color: #bbbbbb;
  &:focus{
    outline: none; 
  }
  
`;
const Button = styled.button`
  flex: 1;
  border: none;
  background-color: #4dbdaf;
  color: white;
`;

const Newsletter = () => {
  return (
    <Container>
      <TextContainer>
      <Title>Our Newsletter</Title>
      <Des>
      Get updates by subscribe our weekly newsletter
      </Des>
      </TextContainer>
      
      <InputContainer >
        <InputIcon/>
        <Input placeholder="Enter your email address" />
        <Button>
          <Send />
          
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
