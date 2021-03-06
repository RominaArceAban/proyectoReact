import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartContextProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';

function App() {

  return (
    <div className="App">
      <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Proyecto React'} />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>     
      </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
