import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <div>
          <Link to='/category' className='Boton'>Categoria</Link>
          <Link to='/item' className='Boton'>Item</Link>
        </div>
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Proyecto React'} />} />
          <Route path='/item/:productId' element={<ItemDetailContainer />} />
          <Route path='*' element={<h1>NOT FOUND 404</h1>}/>
        </Routes>     
      </BrowserRouter>   
    </div>
  );
}

export default App;
