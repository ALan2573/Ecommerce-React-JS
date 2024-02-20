
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.js';
import "bulma/css/bulma.css";
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.js';

function App() {
  return (
    <div className="App">
      
      < NavBar/>
 
      <ItemListContainer />


<ItemDetailContainer/>

    </div>
  );
}

export default App;
