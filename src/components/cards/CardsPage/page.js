import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: '', 
  limit: 8, // Har bir sahifada 8 ta mahsulot
  offset: 0, // Sahifa boshidan mahsulotlar indeksini hisoblash uchun
};

export const page = createSlice({
  name: "product",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload * state.limit; // Sahifadan boshlab mahsulotni hisoblash
    },
  },
});

export const { setOrder, setOffset } = page.actions;
export default page.reducer;
