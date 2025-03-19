import React from 'react'
import { ShopContext } from '../context/ShopContext'
import {useContext,useState} from 'react'
import ShowProduct from '../components/ShowProduct';
import { Link } from 'react-router';
import { assets } from '../assets/frontend_assets/assets';
import Title from '../components/Title';
const Collection = () => {
  const {products}=useContext(ShopContext);
  const [showFilter,setShowFilter]=useState(false);
  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filter Section */}

        <div className='min-w-60'>
          <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2 '>Filters
          <img className={`h-3 sm:hidden ${showFilter ?'rotate-90':''}`}  src={assets.dropdown_icon} alt="" />
          </p>
          {/* Filter by Category */}
          <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter?'':'hidden'} sm:block cursor-pointer`}>
              <p className='mb-1 text-sm font-medium'>Categories</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            
                  <label className="flex items-center space-x-2 cursor-pointer gap-2">
                    <input 
                      className="w-3" 
                      type="checkbox" 
                      value="Men" 
                      name="Men" 
                    />
                    Men
                  </label>
   
              
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Women" 
                    name="Women" 
                  />
                  Women
                </label>
          
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="Kids" 
                    name="Kids" 
                  />
                  Kids
                </label>
                </div>
          </div>
          {/* Sub Categories */}
          <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter?'':'hidden'} sm:block cursor-pointer`}>
              <p className='mb-1 text-sm font-medium'>Type</p>
              <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
              <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="TopWear" 
                    name="TopWear" 
                  />
                  TopWear
                </label>
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="BottomWear" 
                    name="BottomWear" 
                  />
                  BottomWear
                </label>
                <label className="flex items-center space-x-2 cursor-pointer gap-2">
                  <input 
                    className="w-3" 
                    type="checkbox" 
                    value="SummerWear" 
                    name="SummerWear" 
                  />
                  SummerWear
                </label>
              </div>
          </div>
        </div>

      {/* Right Side */}
      <div className='flex-1'> 
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
            <Title text1={"All"} text2={"Collections"}/>
            {/* Product Sort */}
            <select className='border-2 border-gray-400 text-sm px-2'>
              <option value="Relative">Sort by : Relavent</option>
              <option value="LowToHigh">Sort by : Low To High</option>
              <option value="HighToLow" >Sort by : High To Low</option>
            </select>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5'>
                { products.map((item,index)=>{return <ShowProduct key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>})}
            </div>
      </div>
    </div>
  )
}

export default Collection
