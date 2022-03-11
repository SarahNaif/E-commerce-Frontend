/*  ==================
      Import Statments  
     =================== */
import React from 'react'
import Home from './pages/Home';
import ProductList from './pages/ProductList'
import SingleProduct from './pages/SingleProduct'
import Navbar from './components/Navbar';
import Announcement from './components/Announcement'
import Footer from './components/Footer';
import Newsletter from "./components/Newsletter";
import Cart from "./pages/Cart"
import { BrowserRouter as Router, Route,Routes } from "react-router-dom"


const App = () => {
  return (
    <Router>
      <div>
        <Announcement />
        <Navbar />
        <Routes>
         {/* one component two path */}
            <Route path="/" element={<Home />} />
            <Route path="/products/:category" element={<ProductList />} />
            <Route path="/product/:id" element={<SingleProduct  />} />
            <Route path="/cart" element={<Cart />} />
           
        </Routes>
<Newsletter/>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
