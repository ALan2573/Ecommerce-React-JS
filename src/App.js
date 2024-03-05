import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './pages/ItemListContainer/ItemListContainer.js';
import "bulma/css/bulma.css";
import ItemDetailContainer from './pages/ItemDetailContainer/ItemDetailContainer.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from './components/context/CartContext.js';
import Cart from './pages/Cart/Cart.js';
import Checkout from './pages/Checkout/Checkout.js';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CartProvider>
      < NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
        </Routes>
        </CartProvider>

      </BrowserRouter>
    

    </div>
  );
}

export default App;
