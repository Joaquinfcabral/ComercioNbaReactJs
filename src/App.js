import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './componentes/navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar/>
      <ItemListContainer/>
    </div>
  );
}

export default App;
