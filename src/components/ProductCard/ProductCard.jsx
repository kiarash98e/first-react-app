import React from 'react'
import './src/style.css'
function ProductCard() {
    return (
        <div className="product-card">
            <div>
                <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" alt="" />
                <p>midi sunders with shirring detail</p>
            </div>
            <div className="card-info">
                <div>$29.8</div>
                <div>
                    <button>add to cart</button>
                </div>
            </div>
        </div>

    )
}
export default ProductCard
