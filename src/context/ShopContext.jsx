import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";
export const ShopContext=createContext();
const ShopContextProvider=(props)=>
{

    const currency='₹';
    const deliveryCharge=10;
    const[showSearch,setShowSearch]=useState(false);
    const[search,setSearch]=useState('');
    let cart=[];
    const value={
        products,currency,deliveryCharge,showSearch,setShowSearch,search,setSearch,cart
    }
    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
} 
export default ShopContextProvider;