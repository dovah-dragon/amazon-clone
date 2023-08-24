import "./Product.css";
const Rs = "₹";


function Product({id, title, img, price, rating}) {
    return(
        <div className="product">
            <div className="productInfo">
                <p>{title}</p>
                <p className="productPrice">
                    <small>{Rs}</small>
                    <strong>{price}</strong>
                </p>
                <div className="productRating">
                    {Array(rating).fill().map((_, i) => (
                        <p>⭐</p>
                    ))}
                </div>
            </div>

            <img className="productImage" src={img}></img>

            <button>Add to Basket</button>

        </div>
    )
}

export default Product;