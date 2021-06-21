import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard.jsx'
import ProductFilters from './components/ProductFilters/ProductFilters.jsx'
import Header from './components/Header/Header.jsx'
function App() {
  const product = [
    {
      title:"mindy are vv1",
      src:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg",
      price:"29.4",
      id:1,
    },
    {
      title:"svar are vv1",
      src:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress2.jpg",
      price:"28.3",
      id:2,
    },
    {
      title:"sete are vv1",
      src:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress3.jpg",
      price:"14.5",
      id:3,
    },
    {
      title:"manda are vv1",
      src:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress4.jpg",
      price:"34.2",
      id:4,
    }
  ]
  return (
    <div>
        <Header title={'React Shopping center'}/>
        <main>
          <section className="main">
            <section>
              <ProductFilters/>
            </section>
          </section>
          <section>
            <div className="product-container">
              
                {
                  product.map((item , index) => {
                    return(
                      <div key={item.id} className="product-item">
                        <ProductCard src={item.src} describtion={item.title} price={item.price} />
                      </div>
                    )
                  })
                }
              
            </div>
          </section>
            <div className="cart">

            </div>
        </main>
    </div>
  )
}

export default App
