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

  const products = [
    { id: 1, name: 'Product A' },
    { id: 2, name: 'Product B' },
    { id: 3, name: 'Product C' },
  ];

  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold">Shopping Cart</h2>
      <ul>
        {cartState.cartItems.map((item) => (
          <li key={item.id} className="py-2">
            {item.name} - {item.quantity}
            <button
              onClick={() => updateQuantity(item.id, item.quantity + 1)}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            >
              +
            </button>
            <button
              onClick={() => updateQuantity(item.id, item.quantity - 1)}
              className="ml-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
            >
              -
            </button>
            <button
              onClick={() => removeFromCart(item.id)}
              className="ml-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
      <h2 className="text-2xl font-bold">Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id} className="py-2">
            {product.name}
            <button
              onClick={() => addToCart(product)}
              className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded"
            >
              Add To Cart
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
