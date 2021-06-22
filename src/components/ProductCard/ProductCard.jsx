import React from 'react'
import './style.css'
function ProductCard(src='',describtion='',price='',onClick) {
    return (
        <div className="product-card">
            <div>
                <img src={src} alt="" />
                <p>{describtion}</p>
            </div>
            <div className="card-info">
                <div>${price}</div>
                <div>
                    <button onClick={onClick}>add to cart</button>
                </div>
            </div>
        </div>

    )
}
export default ProductCard
