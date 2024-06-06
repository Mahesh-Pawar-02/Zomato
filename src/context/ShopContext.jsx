import { createContext, useEffect, useState } from "react";
// import all_product from '../components/assets/all_product'

export const ShopContext = createContext(null)

export const ShopProvider = (props) => {

    let initItems = []
    if(localStorage.getItem('cartItems') === null) initItems = []
    else 
        initItems = JSON.parse(localStorage.getItem('cartItems'))
    const [cartItems, setCartItems] = useState(initItems);

    const addToCart = (product) => {
        // Check if the product already exists in the cart
        const existingItem = cartItems.find((item) => item._id === product._id);

        if (existingItem) {
            setCartItems(cartItems.map((item) => (item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item)));
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };

    const removeFromCart = (productId) => {
        // setCartItems(cartItems.map((item) => (item.id === productId ? { ...item, quantity: item.quantity - 1 } : item)));
        setCartItems(cartItems.filter((item) => item.id !== productId));
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
        console.log(cartItems);
    }, [cartItems])

    const contextValue = { addToCart, removeFromCart, cartItems }

    return <ShopContext.Provider value={contextValue}>
        {props.children}
    </ShopContext.Provider>
}