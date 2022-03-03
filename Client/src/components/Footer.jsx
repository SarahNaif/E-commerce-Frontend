import {
    Facebook,
    Instagram,
    MailOutline,
    Phone,
    Pinterest,
    Room,
    Twitter,
  } from "@material-ui/icons";
import {mobile} from "../responsive";
import styled from "styled-components";


const Container =styled.div`
  display: flex;
  flex-direction: column;

  color: #0d0d0d;
  background-color: #efefef;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction:row;
  padding: 10px 40px;
  ${mobile({ padding: "0px", flexDirection:"column" })}
  
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
`;
const Des = styled.p`
 margin: 20px 0px;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props)=> props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;


const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;


const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  padding: 10px 40px;
  background-color: #efefef;
  border-top: 0.4px #bababa5e solid ;
 
`;
const Text = styled.p`
font-size: 14px;
font-weight: 400;
line-height: 20px;
color: #666;
font-family: "Poppins", sans-serif;
`
const Img = styled.img`
text-align:right;
border-style: none;
max-width: 100%;

margin: 0 10px;
${mobile({ display:"none" })}

`
function Footer() {
    return (
      <Container>
      <Wrapper>
        <Left>
          <Logo>LAMA.</Logo>
          <Des>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius maxime quos id et quidem impedit ab quibusdam, voluptas eligendi molestiae reiciendis veniam vero ut vel aut nihil odio cupiditate quo.</Des>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>


        <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
        </Center>


        <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
        </ContactItem>
        <ContactItem>
          <Phone style={{marginRight:"10px"}}/> +1 234 56 78
        </ContactItem>
        <ContactItem>
          <MailOutline style={{marginRight:"10px"}} /> contact@lama.dev
        </ContactItem>
       
        </Right>

      </Wrapper>
              <Row>
                <Left><Text>Copyright © 2022 Ecommerce Built with <span>React</span> by Sarah Althowebi.</Text></Left>
                <Img alt="pyment" src="https://res.cloudinary.com/dvukj9sqf/image/upload/v1642250874/payment_e2m7vo.png" />
              </Row>
              </Container>

    );
}

export default Footer
