import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
//created a slice and reducer functions 
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    incrementQuantity: (state, action) => {
      const existingItem = state.items.find(item => item.id === action.payload);
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
        const existingItem = state.items.find(item => item.id === action.payload);
        if (existingItem.quantity>1) {
          existingItem.quantity -= 1;
        }
        else{
            state.items = state.items.filter(item => item.id !== action.payload);
        }
      },
  },
});

export const { addToCart, removeFromCart, incrementQuantity,decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;
