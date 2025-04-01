import { createContext, useEffect, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
export const ShopContext=createContext();
const ShopContextProvider=(props)=>
{

    const navigate=useNavigate();
    const currency='₹';
    const deliveryCharge=10;
    
    const[showSearch,setShowSearch]=useState(false);
    const[search,setSearch]=useState('');
    const [cartItem, setCartItem] = useState(() => {
        const savedCart = localStorage.getItem("CartItemsData");
        return savedCart ? JSON.parse(savedCart) : {};
      });
    const upDateCartItem=(itemId,size,quantity)=>
    {
        let cartData=structuredClone(cartItem);
        cartData[itemId][size]=quantity;
        console.log("quantity in up to date : "+quantity);
        setCartItem(cartData);
        localStorage.setItem('CartItemsData',JSON.stringify(cartItem));
    }    
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
                    total=total+cartItem[items][item];
                }
            }
            console.log("total "+total);
            
            return total;
        }
    const getCartAmount=()=>
    {
        let total=0;
        for(const items in cartItem)
        {
            let productInfo=products.find((product)=>product._id===items);
            for(const item in cartItem[items])
            {
                if(cartItem[items][item]>0)
                {
                    total=total+(cartItem[items][item]*productInfo.price);
                }
            }

        }
        return total;
    }
    const value={
        products,currency,deliveryCharge,showSearch,setShowSearch,search,setSearch,cartItem,addToCart,getCartCount,upDateCartItem,getCartAmount,navigate
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