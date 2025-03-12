import React from 'react'
import ShowProduct from '../components/ShowProduct'
import { ShopContext } from '../context/ShopContext'
import { useContext } from 'react'
const WomenSection = () => {
    const {products}=useContext(ShopContext);
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {products.map((item, index) => item.category==='Women'?(<ShowProduct key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>):null)}
  </div>
  )
}

export default WomenSection
