// redux/slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [], // [{productId, name, price, quantity}]
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.productId === item.productId);

      if (existing) {
        existing.quantity += item.quantity;
      } else {
        state.items.push(item);
      }

      state.total += item.price * item.quantity;
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      const item = state.items.find(i => i.productId === productId);
      if (item) {
        state.total -= item.price * item.quantity;
        state.items = state.items.filter(i => i.productId !== productId);
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
