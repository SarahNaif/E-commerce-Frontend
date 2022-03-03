/*  ==================
      Import Statments  
     =================== */
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products';
import TextProduct from '../components/TextProduct';


const Home = () => {
    return (
        <div>
        <Slider/>
        <Categories/>
        <TextProduct/>
        <Products/>
        
        </div>
    )
}

export default Home; 
