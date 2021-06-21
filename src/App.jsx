import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard/productCard.jsx'
function App() {
  return (
    <div>
        <header>
          <div> 
            <p>React Shopping Cart</p>
          </div>
        </header>
        <main>
          <section className="main">
            <section>
              <div className="filters-container">
                <div>
                  6 products
                </div>
                <div>
                  <label htmlFor="order">order</label>
                  <select name="select-order" id="order">
                    <option >latest</option>
                    <option >lowest</option>
                    <option >highest</option>
                  </select>
                </div>
                <div>
                  <label htmlFor={"filter"}>filter</label>
                  <select name="select-filter" id="filter">
                    <option >all</option>
                    <option >xs</option>
                    <option >s</option>
                    <option >m</option>
                    <option >l</option>
                    <option >xl</option>
                    <option >xxl</option>
                  </select>
                </div>
              </div>
            </section>
          </section>
          <section>
            <div className="product-container">
              <div className="product-item">
                <ProductCard/>
              </div>
              <div className="product-item">
                <ProductCard/>
              </div>
            </div>
          </section>
            <div className="cart">

            </div>
        </main>
    </div>
  )
}

export default App
