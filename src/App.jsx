import {useState} from 'react'
import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import ProductFilters from './components/ProductFilters/ProductFilters'
import Header from './components/Header/Header'
import {productList} from './data/data'
function App() {
  const [FilterdProductList,setFilterdProductList] = useState(productList)
  const addProduct = ()=>{
    const product = {
      title:"scalr are vv1",
      src:"https://react-shopping-cart-seven-lovat.vercel.app/images/dress5.jpg",
      price:"100.4",
      id:5,
    }
    setFilterdProductList([...FilterdProductList,product])
  }
  return (
    <div>
        <Header title={'React Shopping center'}/>
        <main>
          <section className="main">
            <section>
              <ProductFilters/>
              <button onClick={addProduct}>add product</button>
            </section>
          </section>
          <section>
            <div className="product-container">
              
                {
                  FilterdProductList.map((item , index) => {
                    return(
                      <div key={item.id} className="product-item">
                        <ProductCard 
                          src={item.src} 
                          describtion={item.title} 
                          price={item.price} 
                          onClick={() => handleRemove(item.id)}
                        />
                      </div>
                    )
                  })
                }
              
            </div>
          </section>
        </main>
    </div>
  )
}

export default App
 