
import './App.css';
import './css/bootstrap.css';
import './js/bootstrap.bundle.js';
import HomePage from './pages/home-page';
import PDDetail from './pages/product-detail';
import News from './pages/news';
import ProductType from './pages/product-type';
import Cart from './pages/cart';
import Pay from './pages/pay';
import { Route,Routes } from 'react-router-dom';

export default function App() {
  return (
   <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product-detail" element={<PDDetail/>} />
      <Route path="/product-type" element={<ProductType/>} />
      <Route path="/News" element={<News/>} />
      <Route path="/Cart" element={<Cart/>} />
       <Route path="/Pay" element={<Pay/>} />
    </Routes>
   </>
  );
}

