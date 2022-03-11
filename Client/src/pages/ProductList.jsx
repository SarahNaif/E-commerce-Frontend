import { useState } from "react"
import { useParams } from "react-router-dom";
import styled from "styled-components"
import Products from "../components/Products";
import { useLocation } from "react-router-dom";


const Container = styled.div`
 
  

`;
const Title = styled.h3`
  margin: 45px;
  font-size: 44px;
  font-weight:400;
  &::first-letter{
    text-transform: uppercase;
  }

`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin: 20px;
  
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  
`;
const Select = styled.select`
  
  margin-right: 20px;
    border-radius: 5px;
    border: none;
    text-transform: capitalize;
    color: #fff;
    font-weight:600;
    background: #2c2c2c;
    text-align: left;
    padding: 3px 16px;
    font-size: 16px;
    text-align:center;
    cursor: pointer;
  
`;
const Option = styled.option``;
const Line = styled.div`
width: 96%;
margin: 0px 20px;
border-bottom: 0.7px solid rgb(0,0,0,0.3);

`;
const ProductList = () => {
  
  const [filter, setFilter] = useState({});
  const [sort, setSort] = useState("newest");


const location = useLocation();
const cat = (location.pathname.split("/")[2])



// Update state
const handleFilterChange = (e) => {
  
  const value = e.target.value;
  setFilter({
    ...filter,
   [e.target.name]:value
  })
  console.log(filter)
}


    return (

      <Container>
      <Title>{cat}</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select name="color"  onChange={handleFilterChange}>
            {/*  */}
            <Option disabled >
             Color
            </Option>
            <Option value="White">White</Option>
            <Option value="Black">Black</Option>
            <Option value="Red">Red</Option>
            <Option value="Blue">Blue</Option>
            <Option value="Yellow">Yellow</Option>
            <Option value="Green">Green</Option>
          </Select>
          <Select name="size" onChange={handleFilterChange}>
            <Option disabled >
              Size
            </Option>
            <Option>XS</Option>
            <Option>S</Option>
            <Option>M</Option>
            <Option>L</Option>
            <Option>XL</Option>
          </Select>
        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <Select onChange={e => setSort(e.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc"> price asc</Option>
            <Option value="des"> price des</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Line/>
{/* catigory and state filter */}
      <Products cat={cat} filter={filter} sort={sort}/> 
      
      </Container>
    );
}

export default ProductList
