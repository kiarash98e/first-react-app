import React from 'react'
import './style.css'
function ProductCard(props) {
    return (
        <div className="product-card">
            <div>
                <img src={props.src} alt="" />
                <p>{props.describtion}</p>
            </div>
            <div className="card-info">
                <div>${props.price}</div>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
        </div>

    )
}
export default ProductCard
