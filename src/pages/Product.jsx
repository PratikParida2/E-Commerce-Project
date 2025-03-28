import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from '../context/ShopContext';
import ShowProduct from '../components/ShowProduct';
const Product = () => {
  const {products,cart}=useContext(ShopContext);

  const parameter=useParams();
  let index=-1;

  console.log(products);
  for(let i=0;i<products.length;i++)
  {
    if(products[i]._id===parameter.productId)
    {
      index=i;
      break;
    }
  }
  if(index===-1)
  {
    return <h1 className='text-center'>Product Not Found</h1>
  }
  console.log(index);
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-gray-50 shadow-lg rounded-2xl p-6 text-center relative">
        {/* Product Image */}
        <div className="relative">
          {products[index].bestseller && (
            <span className="bg-red-500 text-white text-sm font-semibold px-4 py-1 rounded-full absolute top-4 left-4 shadow-md">
              Bestseller
            </span>
          )}
          <img
            src={products[index].image}
            alt={products[index].name}
            className="w-64 h-64 object-cover rounded-lg mx-auto shadow-sm"
          />
        </div>

        {/* Product Details */}
        <h2 className="text-3xl font-semibold text-gray-900 mt-4">{products[index].name}</h2>
        <p className="text-gray-600 mt-2 text-lg">{products[index].description}</p>
        <p className="text-2xl font-bold text-green-600 mt-2">₹{products[index].price}</p>
        <p className="text-gray-700 mt-2 font-medium">Category: {products[index].category} - {products[index].subCategory}</p>
        <div className="mt-2">
          <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
            Available Sizes: {products[index].sizes.join(", ")}
          </span>
        </div>
        <div className="mt-6 flex justify-center space-x-4">
          <button className="px-6 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-shadow shadow-md cursor-pointer">
            Buy Now
          </button>
          <button className="px-6 py-3 bg-gray-700 text-white text-lg font-semibold rounded-lg hover:bg-gray-800 transition-shadow shadow-md cursor-pointer">
            Add to Cart
          </button>
        </div>
      </div>
    </div>

  )
}

export default Product
