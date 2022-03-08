import React, { useContext } from "react";
import { Link } from "react-router-dom";

// context
import { cartCon } from "../context/CartContext";

// component
import ShopItem from "./shared/ShopItem";

// style
import styles from './Shop.module.css'

const Shop = () => {
    const { state, dispatch } = useContext(cartCon);

    return (
        <div className={styles.container}>
            <div className={styles.cartContainer}>
                {state.selectedItems.map((item) => (
                    <ShopItem key={item.id} data={item} />
                ))}
            </div>
            {state.counter > 0 && (
                <div className={styles.payments}>
                        <p>
                            <span>Total Item:</span> {state.counter}
                        </p>
                        <p>
                            <span>Total Payments:</span> {state.total}
                        </p>
                    <div className={styles.buttonContainer}>
                        <button className={styles.clear} onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        <button className={styles.checkout} onClick={() => dispatch({ type: "CHECKOUT" })}>
                            Checkout
                        </button>
                    </div>
                </div>
            )}
            {state.checkout && (
                <div className={styles.complete}>
                    <h3>checked out seccussfully</h3>
                    <Link to="/store">Buy More</Link>
                </div>
            )}
            {!state.checkout && state.counter === 0 && (
                <div className={styles.complete}>
                    <h3>Wants To BuY?</h3>
                    <Link to="/store">Go To Store</Link>
                </div>
            )}
        </div>
    );
};

export default Shop;
