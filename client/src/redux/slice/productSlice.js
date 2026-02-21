import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { act } from "react";

export const fetchProducts = createAsyncThunk("products", async () => {
  try {
    
    const response = await axios.get("https://dummyjson.com/products"
    );
    return response.data.products;
  } catch (error) {
    return error.message;
  }
});

export const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    (builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(fetchProducts.fulfilled, (state,action) => {
        state.loading = false;
        state.items = action.payload
      }),
      builder.addCase(fetchProducts.rejected, (state,action) => {
        state.loading = false;
        state.error = action.payload;
      }));
  },
});


export default productSlice.reducer