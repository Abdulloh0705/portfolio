import { configureStore, createSlice } from '@reduxjs/toolkit';

// Sahifalash uchun slice
const pageSlice = createSlice({
  name: "page",
  initialState: {
    order: '', 
    limit: 12, 
    offset: 0,
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload * state.limit;
    },
  },
});

// Mahsulotlar uchun slice
const productsSlice = createSlice({
  name: 'products',
  initialState: {
    likes: [],
    basket: [],
  },
  reducers: {
    addToLikes: (state, action) => {
      state.likes.push(action.payload);
    },
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
    },
  },
});

// Redux action-larni eksport qilish
export const { setOrder, setOffset } = pageSlice.actions;
export const { addToLikes, addToBasket } = productsSlice.actions;

// Redux store yaratish
const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
