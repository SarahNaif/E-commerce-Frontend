import React from 'react'
import Navbar from '../components/Navbar';
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
// import ProductList from '../pages/ProductList'
import TextProduct from '../components/TextProduct';


const Home = () => {
    return (
        <div>
        <Announcement/>
        <Navbar />
        <Slider/>
        <Categories/>
        <TextProduct/>
        <Products/>
        <Newsletter/>
        <Footer/>
        
        </div>
    )
}

export default Home; 
