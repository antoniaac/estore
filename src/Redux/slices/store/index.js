import { configureStore } from "@reduxjs/toolkit";
import categorySlice from "../category/categorySlice";
import productSlice from "../Products/productSlice";
import cartSlice from "../Cart/cartSlice";

export const store = configureStore({
  reducer: {
    categoryReducer: categorySlice,
    pr: productSlice,
    cr: cartSlice,
  },
});
