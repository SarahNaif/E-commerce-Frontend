import {useState,useEffect} from 'react'
import styled from "styled-components";
import { popularProducts } from '../data';
import Product from "./Product"


const Container = styled.div `
     padding: 20px;
     display: flex;
     flex-wrap:wrap;
     justify-content: space-between;
     margin-top: 5px;
    
   
`

const Products = ({cat,filter,sort}) => {
  
    const [filteredProducts, setFilteredProducts] = useState([]);


    useEffect(() => {
        cat &&
          setFilteredProducts(
            popularProducts.filter((item) =>
              Object.entries(filter).every(([key, value]) =>
                item[key].includes(value)
              )
            )
          );
      }, [cat, filter]);

      useEffect(() => {
        if (sort === "newest") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.createdAt - b.createdAt)
          );
        } else if (sort === "asc") {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => a.price - b.price)
          );
        } else {
          setFilteredProducts((prev) =>
            [...prev].sort((a, b) => b.price - a.price)
          );
        }
      }, [sort]);


    return (
  
        <Container>
            {cat
        ? filteredProducts.map((item) => <Product item={item} key={item.id} />)
        : popularProducts
            .map((item) => <Product item={item} key={item.id} />)}
        </Container>
       
    )
}

export default Products
