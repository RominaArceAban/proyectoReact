import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Counter from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  const handleOnAdd = (quantity) => {
    if (quantity > 0) {
      console.log(`Se agregaron ${quantity} productos`)
    }
  }
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Proyecto React'} />
        <ItemDetailContainer />
        <Counter initial={0} stock={100} onAdd={handleOnAdd} />
    </div>
  );
}

export default App;
