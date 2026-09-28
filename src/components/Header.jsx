import { useSelector } from 'react-redux';
export default function Header({ navigate, page }) {
  const count = useSelector(state => state.cart.items.reduce((sum, item) => sum + item.quantity, 0));
  return <header className="header"><button className="brand" onClick={() => navigate('home')} aria-label="Paradise Nursery home">✳ <span>Paradise Nursery</span></button><nav aria-label="Main navigation"><button className={page==='home'?'active':''} onClick={() => navigate('home')}>Home</button><button className={page==='plants'?'active':''} onClick={() => navigate('plants')}>Plants</button><button className={page==='cart'?'active':''} onClick={() => navigate('cart')}>Cart <span className="cart-icon" aria-label={`${count} plants in cart`}>🛒 <strong>{count}</strong></span></button></nav></header>;
}
