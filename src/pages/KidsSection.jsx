import React from 'react'
import {useContext} from 'react'
import { ShopContext } from '../context/ShopContext'

const KidsSection = () => {

  const {products}=useContext(ShopContext);

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
    {products.map((item, index) => item.category==='Kids'?(<ShowProduct key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>):null)}
  </div>
  )
}

export default KidsSection
