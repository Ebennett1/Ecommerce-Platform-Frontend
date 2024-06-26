import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage.js';
import CategoryListPage from './pages/CategoryListPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import ProfilePage from './pages/ProfilePage';
import PasswordReset from './forms/PasswordReset';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import OrderHistoryPage from './pages/OrderHistoryPage';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Footer from './components/Footer.js';

function App() {
  return (
    
      <AuthProvider>
     <CartProvider>
     <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductListPage />} /> 
          <Route path="/product/:id" element={<ProductDetailPage />} />
          <Route path="/categories" element={<CategoryListPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/password-reset" element={<PasswordReset />} />
          <Route path="/order-history" element={<OrderHistoryPage />} />
        </Routes>
        <Footer />
        </CartProvider>
      </AuthProvider>
    
  );
}

export default App;
