import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

// context
import { cartCon } from '../context/CartContext';

const Navbar = () => {

    const history = useHistory()
    const {state} = useContext(cartCon)

    return (
        <div style={{backgroundColor:'blue', color:'white', padding:'3rem'}}>
            <div>
                <button onClick={()=> history.goBack()}>Store</button>
                total price:{state.total}$ <br/> products:{state.counter}
             </div>
        </div>
    );
};

export default Navbar;