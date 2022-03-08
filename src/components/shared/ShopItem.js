import React, { useContext } from "react";

// functions
import { shorten } from "../../helpers/functions";

// context
import { cartCon } from "../../context/CartContext";

// icons
import trash from "../../assets/icons/trash.svg";

// style 
import styles from './ShopItem.module.css'

const ShopItem = (props) => {
    const { dispatch } = useContext(cartCon);

    const { image, title, quantity, price } = props.data;

    return (
        <div className={styles.container}>
            <img src={image} alt={shorten(title)} className={styles.productImage} />
            <div className={styles.data}>
                <h3>{shorten(title)}</h3>
                <p>{price.toFixed(1)} $</p>
            </div>
            <div>
                <span className={styles.quantity}>
                    {quantity}
                </span>
            </div>
            <div className={styles.buttonContainer}>
                {quantity === 1 ? (
                    <button
                        onClick={() =>
                            dispatch({ type: "REMOVE_ITEM", payload: props.data })
                        }
                    >
                        <img src={trash} alt="trash"  />
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
