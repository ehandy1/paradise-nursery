import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../CartSlice.jsx';
import { plants } from '../data/plants.js';
import Header from './Header.jsx';
export default function ProductList({ navigate }) {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const categories = [...new Set(plants.map(plant => plant.category))];
  return <><Header navigate={navigate} page="plants"/><main className="catalog"><div className="intro"><span className="eyebrow">The plant collection</span><h1>Find your next favorite plant.</h1><p>Choose a little green for every corner of your home.</p></div>{categories.map(category => <section key={category} className="category"><div className="section-title"><h2>{category}</h2><span>06 plants</span></div><div className="grid">{plants.filter(plant => plant.category === category).map(plant => {const added = items.some(item => item.id === plant.id);return <article className="plant-card" key={plant.id}><img src={plant.image} alt={plant.name} loading="lazy"/><div className="plant-detail"><h3>{plant.name}</h3><p>${plant.price.toFixed(2)}</p><button disabled={added} onClick={() => dispatch(addItem(plant))}>{added ? 'Added to cart' : 'Add to Cart'}</button></div></article>;})}</div></section>)}</main></>;
}
