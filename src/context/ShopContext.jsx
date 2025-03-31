import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
export const ShopContext=createContext();
const ShopContextProvider=(props)=>
{

    const currency='₹';
    const deliveryCharge=10;
    
    const[showSearch,setShowSearch]=useState(false);
    const[search,setSearch]=useState('');
    // let [cartItem,setCartItem]=useState({});
  
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("CartItemsData");
        return savedCart ? JSON.parse(savedCart) : {};
      });
    
    const addToCart=async(itemId,size)=>
    {
        if(!size)
        {
            toast.error("Please Select Size");
            return;
        }
       let cartData=structuredClone(cartItem);
       if(cartData[itemId])
       {
            if(cartData[itemId][size])
            {
                cartData[itemId][size]=cartData[itemId][size]+1;
            }
            else
            {
                cartData[itemId][size]=1;
            }
       }
       else
       {
         cartData[itemId]={};
         cartData[itemId][size]=1;
       }
       setCartItem(cartData);
    }
    const getCartCount=()=>
        {
            let total=0;
            for(const items in cartItem)
            {
                for(const item in cartItem[items])
                {
                    if(cartItem[items][item]>0)
                    total=total+1;
                }
            }
            return total;
        }
    const value={
        products,currency,deliveryCharge,showSearch,setShowSearch,search,setSearch,cartItem,addToCart,getCartCount
    }
    useEffect(()=>{
        localStorage.setItem("CartItemsData",JSON.stringify(cartItem));
    },[cartItem])
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
} 
export default ShopContextProvider;