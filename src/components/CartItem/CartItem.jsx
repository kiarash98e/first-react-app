import React from 'react'
import './CartItem.css'
export default function CartItem({cartItem,setCartItem}) {
    function remove (id) {
        let newData = [...cartItem]
        newData.splice(id,1)
        setCartItem(newData)
    }
    return (
        <div className="cart-container">
            {
                cartItem.map(item => (
                    <div style={{display: 'flex',
                    }}>
                        <div className="cart-item">
                            <img src={item.src} alt="" />
                        </div>
                        
                        <div className="cart-info">
                            <p>{item.describtion}</p>
                            <p>price : ${item.price}</p>
                            
                        </div>
                        <div style={{marginLeft: 'auto',
                        cursor: 'pointer',
                        }}>
                                <button onClick={()=> remove(item.id)}>&times;</button>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
