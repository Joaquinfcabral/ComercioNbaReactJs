import './Styles/app.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './CartContext/CartContext';
import NavBar from './componentes/Navbar/Navbar'
import ItemListContainer from './componentes/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './componentes/ItemDetailContainer/ItemDetailContainer';
import Cart from './componentes/Cart/Cart';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <div>
    <CartContextProvider>
          <BrowserRouter>
            <NavBar/>
              <Routes>
                <Route path='/' element={<ItemListContainer/>} />
                <Route path='/category/:idCategory' element={<ItemListContainer/>} />
                <Route path="/item/:idItem" element={<ItemDetailContainer/>} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </BrowserRouter>
    </CartContextProvider>
    </div>
  );
}

export default App;
