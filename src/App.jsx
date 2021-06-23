import {useEffect} from 'react'
import {useState} from 'react'
import React from 'react'
import './App.css'
import ProductCard from './components/ProductCard/ProductCard'
import CartItem from './components/CartItem/CartItem'
import ProductFilters from './components/ProductFilters/ProductFilters'
import Header from './components/Header/Header'
import {productList} from './data/data'
function App() {
  const [filters,setFilters] = useState({
    price:null,
    size:null
  })
  const [cartItem,setCartItem] = useState([])
  const [FilterdProductList,setFilterdProductList] = useState(productList)
  useEffect(() => {
    if (filters.size) {
      setFilterdProductList(productList.filter((item) => item.size===filters.size))
    }
    else{
      setFilterdProductList(productList)
    }
  },[filters.size])
  useEffect(() => {
    let array = FilterdProductList
    if (filters.price=== '1') {
      setFilterdProductList(array.sort((a,b) => a.price - b.price))
    }
    else if (filters.price==='-1') {
      setFilterdProductList(array.sort((a,b) => b.price - a.price))
    }
    else if(filters.price==='0'){
      setFilterdProductList(array.sort((a,b) => a.id - b.id))
    }
  },[filters.price,FilterdProductList])
  // function handleRemove (id) {
  //   return setFilterdProductList(productList.filter(item => item.id !== id))
  // }
  return (
    <div>
        <Header title={'React Shopping center'}/>
        <main>
          <section className="main">
            <section style={{display: 'flex',
            }}>
              <ProductFilters resualtCount={FilterdProductList.length} filters={filters} setFilters={setFilters}/>
            </section>
          </section>
          <section style={{width: '80%',display: 'flex',
          
          }}>
            <div style={{display: 'flex',
              flexDirection: 'column',
              alignItems:'center',
              }}>
                <CartItem cartItem={cartItem} setCartItem={setCartItem}/>
              </div>
           
            <div className="product-container">
              
                {
                  FilterdProductList.map((item , index) => {
                    return(
                      <div key={item.id} className="product-item">
                        <ProductCard 
                          src={item.src} 
                          describtion={item.title} 
                          price={item.price} 
                          cartItem={cartItem}
                          setCartItem={setCartItem}
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
 