import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

// context
import { cartCon } from "../context/CartContext";

// icons
import shop from "../assets/icons/shop.svg";

const Navbar = () => {
    const history = useHistory();
    const { state } = useContext(cartCon);

    return (
        <div style={{ backgroundColor: "blue", color: "white", padding: "3rem" }}>
            <div
                style={{
                    display: "flex",
                    width: "100%",
                    justifyContent: "space-between",
                }}
            >
                <button onClick={() => history.goBack()}>Store</button>
                <div>
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
