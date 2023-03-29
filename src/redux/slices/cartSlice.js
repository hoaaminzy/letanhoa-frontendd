import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  value: 1,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item) => item.id.id === newItem.id
      );
      state.totalQuantity++;
      if (!existingItem) {
        state.cartItems.push({
          id: newItem,
          name: newItem.name,
          image: newItem.image,
          price: newItem.price,
          quantityy: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantityy++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }
      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantityy),
        0
      );
    },
    deleteItem: (state, action) => {
      const id = action.payload;
      const existingItem = state.cartItems.find((item) => item.id.id === id);
      if (existingItem) {
        state.cartItems = state.cartItems.filter((item) => item.id.id !== id);
        state.totalQuantity = state.totalQuantity - existingItem.quantityy;
      }

      state.totalAmount = state.cartItems.reduce(
        (total, item) => total + Number(item.price) * Number(item.quantityy),
        0
      );
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
