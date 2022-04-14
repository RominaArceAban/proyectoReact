import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {

  const handleOnAdd = (quantity) => {
    if (quantity > 0) {
      console.log(`Se agregaron ${quantity} productos`)
    }
  }
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <Link to='/category'>Categoria</Link>
          <Link to='/item'>Item</Link>
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>

        <ItemListContainer greeting={'Proyecto React'} />
        <ItemDetailContainer />
        <Counter initial={0} stock={10} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
