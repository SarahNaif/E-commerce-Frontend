import React from 'react'
import styled from 'styled-components'
import {mobile} from "../responsive";
const Wrappper = styled.div `
     padding: 20px;
     display: flex;
     flex-wrap:wrap;
     flex-direction: column;
     align-items: center;
     ${mobile({ padding:"0" })}
`
const Title = styled.h3 `
     padding: 20px;
     display: flex;
     flex-direction: column;
     font-size: 2.0rem;
     font-weight:600;
     text-transform: uppercase;
     font-weight: 500;
     color: #111111;
     letter-spacing: 2px;
     ${mobile({ fontSize:"1.3rem" })}
`
const Des = styled.p `
     padding: 20px;
     font-size: 1.0rem;
     color: #111111;
     text-align: center;
     width: 39%;
     margin: 0 auto;
     line-height: 25px;
     font-weight: 300;
     color: #888888;
     ${mobile({ fontSize:"0.7rem",
padding:"0"})}

`
const TextProduct = () => {
    return (
        <Wrappper>
        <Title>Our Product</Title>
        <Des>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</Des>
        </Wrappper>
    )
}

export default TextProduct
