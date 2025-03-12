import React from 'react'
import { ShopContext } from '../context/ShopContext'
import {useContext} from 'react'
import ShowProduct from '../components/ShowProduct';

const Collection = () => {
  const {products}=useContext(ShopContext);
  console.log(products);
  console.log("Collection Page Yar");
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}

        <div className='min-w-60'>
          <p className='my-2 text-xl flex items-center cursor-pointer gap-2 '>Filters</p>
          <p></p>
        </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
        {products.map((item, index) => (<ShowProduct key={index} id={item._id} name={item.name} image={item.image} price={item.price}/>))}
      </div>
    </div>
  )
}

export default Collection
