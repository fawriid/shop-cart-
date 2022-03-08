import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartCon } from "../context/CartContext";
import ShopItem from "./shared/ShopItem";

const Shop = () => {
    const { state, dispatch } = useContext(cartCon);

    return (
        <div>
            <div>
                {state.selectedItems.map((item) => (
                    <ShopItem key={item.id} data={item} />
                ))}
            </div>
            {state.counter > 0 && (
                <div>
                    <div>
                        <h5>
                            <span>Total Item:</span> {state.counter}
                        </h5>
                        <h5>
                            <span>Total Payments:</span> {state.total}
                        </h5>
                    </div>
                    <div>
                        <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
                        <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                            Checkout
                        </button>
                    </div>
                </div>
            )}
            {state.checkout && (
                <div>
                    <h3>checked out seccussfully</h3>
                    <Link to="/store"></Link>
                </div>
            )}
            {!state.checkout && state.counter === 0 && (
                <div>
                    <h4>Wants To BuY?</h4>
                    <Link to="/store">Go To Store</Link>
                </div>
            )}
        </div>
    );
};

export default Shop;
