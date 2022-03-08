import React, { useContext } from "react";
import { useHistory } from "react-router-dom";

// context
import { productsCon } from "../../context/ProductsContext";

// helper
import { shorten } from "../../helpers/functions";

const ProductDetails = (props) => {
    const history = useHistory();

    const productData = useContext(productsCon);

    const id = props.match.params.id;

    const product = productData[id - 1];

    const { image, description, title, price, category } = product;

    return (
        <div>
            <img src={image} alt={`${shorten(title)} `} style={{ width: "200px" }} />
            <div>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>
                    <span>Category:</span>
                    {category}
                </p>
                <div>
                    <span> {price} $</span>
                    <button onClick={() => history.goBack()}> Back to home</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
