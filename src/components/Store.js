import React, { useContext } from 'react';

import { productsCon } from '../context/ProductsContext'
import Product from './shared/Product';


const Store = () => {


    const products = useContext(productsCon)

    
    return (
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-between'}}>
            {products.map((product) => <Product key={product.id} productData={product} />)}
        </div>
    );
};

export default Store;