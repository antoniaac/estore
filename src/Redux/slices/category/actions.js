import { createAsyncThunk } from "@reduxjs/toolkit";

// export const getCategories = createAsyncThunk("getCategories", () => {
//   const categories = fetch("http://localhost:3000/teams-json")
//     .then((res) => res.json())
//     .then((categories) => console.log(categories));

//   return categories;
// });

export const getCategories = createAsyncThunk("getCategories", () => {
  console.log("bbbbbbbbbbb");
  const categories = fetch("http://localhost:5000/productCategories")
    .then((res) => {
      console.log(res);
      console.log("xxxxxxxxx");
      return res.json();
    })
    .catch((err) => console.log(err));
  console.log("aaaaaaaa");
  return categories;
});
