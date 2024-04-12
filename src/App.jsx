import React from 'react';
import { useCart } from './CartContext';

export default function App() {
  const { cartState, cartDispatch } = useCart();

  const addToCart = (item) => {
    const existingCartItem = cartState.cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingCartItem) {
      cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id: item.id, quantity: existingCartItem.quantity + 1 } });
    } else {
      cartDispatch({ type: 'ADD_TO_CART', payload: { ...item, quantity: 1 } });
    }
  };

  const updateQuantity = (itemId, quantity) => {
    if (quantity > 0) {
      cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id: itemId, quantity } });
    }
  };

  const removeFromCart = (itemId) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  };

  
}
