import React, { useEffect, useState, createContext } from "react";
import { getApi } from "../services/api";

export const productsCon = createContext();

const ProductsContext = (props) => {
    const [products, setProducts] = useState([]);

    // catching api so we can send it to all over our application with context
    useEffect(() => {
        const api = async () => {
            setProducts(await getApi());
        };
        api();
    }, []);

    return (
        <div>
            <productsCon.Provider value={products}>{props.children}</productsCon.Provider>
        </div>
    );
};

export default ProductsContext;
