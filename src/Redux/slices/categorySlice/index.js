import { createSlice } from "@reduxjs/toolkit";

const initialState = ["Men", "Women", "Kids", "Best Offers", "All"];

const categorySlice = createSlice({
  name: "Category",
  initialState: initialState,
});

export default categorySlice;
