import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ShopContextProvider } from '../src/compoents/context/shop-context.jsx'
import Home from "./Home.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Error from "./Error.jsx";
import RegAccount from "./compoents/forms/RegAccount.jsx";
import Login from "./compoents/forms/Login.jsx";
import Forgotpswd from "./compoents/forms/Forgotpswd.jsx";
import ProductPage from "./compoents/Products/Productpage.jsx";
import Cart from "./compoents/Products/Cart.jsx";
import Navbar from "./compoents/navbar/Navbar.jsx";
import Footer from './compoents/footer/Footer.jsx'
import ScrollToTop from "./compoents/ScrollTop.js";
import Technology from "./compoents/Products/Technology.jsx";
import ProductFilter from "./compoents/Products/ProductFilter.jsx";
import Payment from "./compoents/forms/Payment.jsx";
import Fashion from "./compoents/Products/Fashion.jsx";
import Grocery from "./compoents/Products/Grocery.jsx"

const App = () => {
  return <>
    <ShopContextProvider>
        <Router>
          <ScrollToTop />
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/RegAccount" element={<RegAccount/>} />
            <Route path="/Login" element={<Login/>}/>
            <Route path="/ProductPage/:pid" element={<ProductPage />}/>
            <Route path="/Technology" element={<Technology />} />
            <Route path="/Fashion" element={<Fashion />} />
            <Route path="/Grocery" element={<Grocery />} />
            <Route path="/cart" element={<Cart />}/>
            <Route path="/Forgotpswd" element={<Forgotpswd/>}/>
            <Route path="/payment" element={<Payment />}/>
            <Route path="/ProductFilter" element={<ProductFilter />}/>
            <Route path="*" element={<Error />}/>
          </Routes>
          <Footer />
        </Router>
    </ShopContextProvider>
  </>
};

export default App;
