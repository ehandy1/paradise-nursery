import { useState } from 'react';
import AboutUs from './components/AboutUs.jsx';
import ProductList from './components/ProductList.jsx';
import CartItem from './components/CartItem.jsx';
import './App.css';
export default function App() {
  const [page, setPage] = useState('home');
  function navigate(next) { setPage(next); window.scrollTo(0, 0); }
  if (page === 'plants') return <ProductList navigate={navigate}/>;
  if (page === 'cart') return <CartItem navigate={navigate}/>;
  return <main className="home"><section className="hero"><div className="hero-content"><span className="eyebrow">Welcome to your green escape</span><h1>Paradise<br/>Nursery</h1><p>Beautiful plants for the spaces you call home.</p><button onClick={() => navigate('plants')}>Get Started <span aria-hidden="true">↗</span></button></div></section><AboutUs/></main>;
}
