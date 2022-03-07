import React from 'react';
import { Link } from 'react-router-dom';
import { shorten } from '../../helpers/shorten';

const Product = ({productData}) => {
    return (
        <div style={{border:'1px solid silver', padding:'1rem', margin:'.5rem'}}>
            <img src={ productData.image} alt={`${shorten(productData.title)} image`} style={{width:'200px'}}/>
            <h4>{ shorten(productData.title)}</h4>
            <p>{ productData.price}</p>
            <div>
                <Link to={`/product/${productData.id}`}>Details</Link>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;