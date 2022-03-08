import React, { useContext } from "react";
import { Link } from "react-router-dom";

// functions
import { isInCart, quantityCount, shorten } from "../../helpers/functions";

// context
import { cartCon } from "../../context/CartContext";

// icons
import trash from "../../assets/icons/trash.svg";

// style
import styles from "./Product.module.css";

const Product = ({ productData }) => {
    const { state, dispatch } = useContext(cartCon);

    return (
        <div className={styles.container}>
            <img
                src={productData.image}
                alt={`${shorten(productData.title)}`}
                className={styles.cardImage}
            />
            <h3>{shorten(productData.title)}</h3>
            <p>{productData.price}$</p>
            <div className={styles.linkContainer}>
                <Link to={`/product/${productData.id}`}>Details</Link>

                {/* if quantity (quantityCount in funtions) is one show delete button if it is more than one show decrease button */}
                <div className={styles.buttonContainer}>
                    {quantityCount(state, productData.id) === 1 && (
                        <button
                            className={styles.smallButton}
                            onClick={() =>
                                dispatch({ type: "REMOVE_ITEM", payload: productData })
                            }
                        >
                            <img src={trash} alt="trash icon" />
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 1 && (
                        <button
                            className={styles.smallButton}
                            onClick={() =>
                                dispatch({ type: "DECREASE", payload: productData })
                            }
                        >
                            -
                        </button>
                    )}
                    {quantityCount(state, productData.id) > 0 && (
                        <span className={styles.counter}>
                            {quantityCount(state, productData.id)}
                        </span>
                    )}

                    {/* if it's in cart show increase button if it is not show add to cart button */}
                    {isInCart(state, productData.id) ? (
                        <button
                            className={styles.smallButton}
                            onClick={() =>
                                dispatch({ type: "INCREASE", payload: productData })
                            }
                        >
                            +
                        </button>
                    ) : (
                        <button
                            onClick={() =>
                                dispatch({ type: "ADD_ITEM", payload: productData })
                            }
                        >
                            Add to cart
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Product;
