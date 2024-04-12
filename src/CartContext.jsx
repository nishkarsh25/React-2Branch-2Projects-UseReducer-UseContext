import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export function CartProvider({children}){

    const initialState = {
        cartItems:[]
    }
    

    function cartReducer(state,action){
        
    }

    const [cartState,cartDispatch] = useReducer(cartReducer,initialState);

    return <CartContext.Provider value={{cartState,cartDispatch}}>{children}</CartContext.Provider>
}

