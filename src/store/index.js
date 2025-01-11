import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice.js';
//created store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export default store;
