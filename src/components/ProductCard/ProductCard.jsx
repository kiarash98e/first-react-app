import React from 'react'
import './style.css'
function ProductCard({cartItem,setCartItem,src,describtion,price}) {
    function show () {
        let item = {
            src:src,
            describtion:describtion,
            price:price,
            
        }
        setCartItem([...cartItem,item])
    }
    return (
        <div className="product-card">
            <div>
                <img src={src} alt="" />
                <p>{describtion}</p>
            </div>
            <div className="card-info">
                <div>${price}</div>
                <div>
                    <button onClick={show}>add to cart</button>
                </div>
            </div>
        </div>

    )
}
export default ProductCard
