import React, { useContext } from "react";

// functions
import { shorten } from "../../helpers/functions";

// context
import { cartCon } from "../../context/CartContext";

// icons
import trash from "../../assets/icons/trash.svg";

const ShopItem = (props) => {
    const { dispatch } = useContext(cartCon);

    const { image, title, quantity, price } = props.data;

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <img src={image} alt={shorten(title)} style={{ width: "100px" }} />
            <div>
                <p>{shorten(title)}</p>
                <p>{price.toFixed(1)}</p>
            </div>
            <div>{quantity}</div>
            <div>
                {quantity === 1 ? (
                    <button
                        onClick={() =>
                            dispatch({ type: "REMOVE_ITEM", payload: props.data })
                        }
                    >
                        <img src={trash} alt="trash" style={{ width: "10px" }} />
                    </button>
                ) : (
                    <button
                        onClick={() =>
                            dispatch({ type: "DECREASE", payload: props.data })
                        }
                    >
                        -
                    </button>
                )}
                <button
                    onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default ShopItem;
