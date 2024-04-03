import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "./actions";
const initialState = {
  categories: [],
  status: "idle",
  error: "",
};

const categorySlice = createSlice({
  name: "productCategories",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state, action) => {
        state.status = "Loading...";
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.status = "Success";
        state.categories = action.payload;
        // state.categories = state.categories.concat(action.payload);
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default categorySlice.reducer;
