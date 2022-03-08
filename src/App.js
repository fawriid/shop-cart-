import "./App.css";

// components
import Store from "./components/Store";
import ProductDetails from "./components/shared/ProductDetails";
import Navbar from "./components/Navbar";
import Shop from "./components/Shop";

// contexts
import ProductsContext from "./context/ProductsContext";
import CartContext from "./context/CartContext";

// router-dom
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
    return (
        <ProductsContext>
            <CartContext>
                <Navbar />
                <Switch>
                    <Route path="/product/:id" component={ProductDetails} />
                    <Route path="/sotre" component={Store} />
                    <Route path="/shop" component={Shop} />
                    <Redirect to="/sotre" />
                </Switch>
            </CartContext>
        </ProductsContext>
    );
}

export default App;
