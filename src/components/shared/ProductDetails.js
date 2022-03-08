import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";

// context
import { productsCon } from "../../context/ProductsContext";

// helper
import { shorten } from "../../helpers/functions";


// styles
import styles from './ProductDetails.module.css'

const ProductDetails = () => {
    const navigate = useNavigate()
    const params = useParams()

    const productData = useContext(productsCon);

    const id = params.id;

    const product = productData[id - 1];

    const { image, description, title, price, category } = product;

    return (
        <div className={styles.container}>
            <img src={image} alt={`${shorten(title)} `} className={ styles.image}/>
            <div className={styles.textContainer}>
                <h3>{title}</h3>
                <p className={styles.description}>{description}</p>
                <p className={styles.category}>
                    <span>Category:</span>
                    {category}
                </p>
                <div className={styles.buttonContainer}>
                    <span className={styles.price}> {price} $</span>
                    <button onClick={() => navigate(-1)}>Back to home</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
