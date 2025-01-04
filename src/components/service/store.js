import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  order: '', 
  limit: 12, 
  offset: 0,
};

export const pageSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload * state.limit*1+4 ;
    },
  },
});

export const { setOrder, setOffset } = pageSlice.actions;

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
  },
});

export default store;
