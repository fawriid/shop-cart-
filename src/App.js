import './App.css';

// components
import Store from './components/Store';

// contexts
import ProductsContext from './context/ProductsContext';
import CartContext from './context/CartContext';

// router-dom
import {Switch, Route, Redirect} from 'react-router-dom'
import ProductDetails from './components/shared/ProductDetails';



function App() {
  return (
    <ProductsContext>
      <CartContext>
          <Switch>
                <Route path='/product/:id' component={ProductDetails} /> 
                <Route path='/sotre' component={Store} /> 
                <Redirect to='/sotre' />
          </Switch>
      </CartContext>
    </ProductsContext>
  );
}

export default App;
