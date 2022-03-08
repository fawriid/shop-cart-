import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

// context
import { cartCon } from "../context/CartContext";

// icons
import shop from "../assets/icons/shop.svg";


// style
import styles from './Navbar.module.css'



const Navbar = () => {
    const navigate = useNavigate()
    const { state } = useContext(cartCon);

    return (
        <div className={styles.mainContainer}>
            <div className={styles.container}>
                <button className={styles.productLink} onClick={() => navigate(-1)}>Store</button>
                <div className={styles.iconContainer}>
                    <Link to="/shop">
                        <img src={shop} alt="shop icon" />
                        <span style={{ color: "white" }}> {state.counter}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
