import { ArrowDropUp } from "@material-ui/icons";
import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Container = styled.div`
   
`;
const Title = styled.h1`
  margin: 20px;
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
    return (
      <Container>
           <Navbar />
        <Announcement />
       
        
        <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <Select>
            <Option disabled selected>
              Color
            </Option>
            <Option>White</Option>
            <Option>Black</Option>
            <Option>Red</Option>
            <Option>Blue</Option>
            <Option>Yellow</Option>
            <Option>Green</Option>
          </Select>
          <Select>
            <Option disabled selected>
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
          <Select>
            <Option selected>Newest</Option>
            <Option> price asc</Option>
            <Option> price des</Option>
          </Select>
        </Filter>
      </FilterContainer>
      <Line/>
      <Products />
      <Newsletter />
      <Footer />
      </Container>
    );
}

export default ProductList
