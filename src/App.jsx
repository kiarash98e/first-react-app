import './App.css'

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
              <div className="product-card">
                <div>
                  <img src="https://react-shopping-cart-seven-lovat.vercel.app/images/dress1.jpg" alt="" />
                  <p>midi sunders with shirring detail</p>
                </div>
                <div>
                  <div>$29.8</div>
                  <div>
                    <button>add to cart</button>
                  </div>
                </div>
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
