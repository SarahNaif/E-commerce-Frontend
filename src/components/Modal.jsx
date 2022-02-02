import { Close } from "@material-ui/icons";
import { useRef ,useState} from "react"
import {useSpring,animated} from "react-spring"
import styled from "styled-components"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Background = styled.div`
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.55);
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10; 
`;

const ModalWrapper = styled.div`
  width: 500px;
  height: 540px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #fff;
  color: #000;
  position: relative;
  border-radius: 10px;
  display: flex;
  justify-content:center;
  align-items: center;
  
`;



const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  margin-bottom: 10px;
  min-width: 80vh;
  p {
    margin-bottom: 1rem;
  }
  hr {
    margin: 1.5rem 0;
    position: relative;
    border: 0;
    color: black;
    text-align: center;
    height: 1.5em;
    opacity: 0.5;

    &:before {
      content: "";
      background: linear-gradient(to right, transparent, #818078, transparent);
      position: absolute;
      left: 0;
      top: 50%;
      width: 100%;
      height: 1px;
    }

    &:after {
      content: attr(data-content);
      position: relative;
      display: inline-block;
      color: black;
      padding: 0 0.5em;
      line-height: 1.5em;
      color: #818078;
      background-color: #fcfcfa;
    }
  }
`;


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

const Modal = ({ showModal, setShowModal }) => {
  const modalRef = useRef();
  // animation 
  const animation = useSpring({
    config: {
      duration: 400
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });
const closeBackmodel=e=>{
      if (modalRef.current === e.target) {
        setShowModal(false)
      }
}
const [switchForm,setswitch]=useState(false)



  return (
    <>
      
      {showModal ? 

      <Background onClick={closeBackmodel} ref={modalRef}>
        <animated.div style={animation}>
         <ModalWrapper >
         
             <ModalContent>
                <h1>Join Us</h1>
                <p>Get exclusive access to our next Collection.</p>
                {switchForm ?<SignupForm/>:<LoginForm/> }

                <Button onClick={() => setswitch(prev => !prev)}>{switchForm ?"Login":"SignUp"}</Button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            
         </ModalWrapper>
         </animated.div>
         
      </Background> 
      : null}
    </>
  );
};

export default Modal
