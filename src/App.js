import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div className="App">
        <NavBar />
        <ItemListContainer greeting={'Proyecto React'} />
    </div>
  );
}

export default App;
