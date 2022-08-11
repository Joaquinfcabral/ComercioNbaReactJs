import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './componentes/CartContext/CartContext';
import NavBar from './componentes/NavBar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
    <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:id' element={<ItemListContainer/>} />
                <Route path="/detail/:itemId" element={<ItemDetailContainer/>} />
              </Routes>
            </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
