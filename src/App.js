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
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <ProductsContext>
            <CartContext>
                <Navbar />
                <Routes>
                    <Route path="/store" element={<Store />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                    <Route path='/*' element={<Navigate to='/store' />} />
                </Routes>
            </CartContext>
        </ProductsContext>
    );
}

export default App;
