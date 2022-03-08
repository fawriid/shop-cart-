import React, { useContext } from 'react';
import { Link } from 'react-router-dom';


// functions
import { isInCart, quantityCount, shorten } from '../../helpers/functions';

// context
import { cartCon } from '../../context/CartContext';

const Product = ({productData}) => {

    const {state,dispatch} = useContext(cartCon)

    return (
        <div style={{border:'1px solid silver', padding:'1rem', margin:'.5rem'}}>
            <img src={ productData.image} alt={`${shorten(productData.title)}`} style={{width:'200px'}}/>
            <h4>{ shorten(productData.title)}</h4>
            <p>{ productData.price}$</p>
            <div>
                <Link to={`/product/${productData.id}`}>Details</Link>


                {/* if quantity (quantityCount in funtions) is one show delete button if it is more than one show decrease button */}
                {quantityCount(state, productData.id) === 1 && <button onClick={() => dispatch({type:'REMOVE_ITEM', payload:productData})}> delete</button>}
                {quantityCount(state, productData.id) > 1 && <button onClick={()=> dispatch({type:'DECREASE', payload:productData})}>-</button>} 


                {/* if it's in cart show increase button if it is not show add to cart button */}
                {isInCart(state, productData.id) ? <button onClick={() => dispatch({ type: 'INCREASE', payload: productData })}>+</button> : <button onClick={()=> dispatch({type:'ADD_ITEM', payload:productData})}>Add to cart</button>}


            </div>
        </div>
    );
};

export default Product;