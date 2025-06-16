import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';

import Story from '../pages/AboutPage';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import Product from "../components/Product/Product";
import ContactPage from '../pages/ContactPage';
import Error from '../components/404Error/404';
import Account from '../components/MyAccount/MyAccount';
import Whishlist from '../components/Whishlist/Whishlist';
import Carts from '../components/Cart/Cart';
import Bill from '../components/Billing/Bill';
import ScrollToTop from '../components/functions/ScrollToTop';
import Home from "./Home";

import { CartProvider } from '../components/Cart/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/product" element={<Product />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Bill" element={<Bill />} />
          <Route path="/Cart" element={<Carts />} />
          <Route path="/Whishlist" element={<Whishlist />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/About" element={<Story />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}

export default App;
