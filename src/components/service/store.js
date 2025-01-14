import { configureStore, createSlice } from "@reduxjs/toolkit";

const pageSlice = createSlice({
  name: "page",
  initialState: {
    order: "",
    limit: 12,
    offset: 0,
  },
  reducers: {
    setOrder: (state, action) => {
      state.order = action.payload;
    },
    setOffset: (state, action) => {
      state.offset = action.payload * state.limit * 1 + 4;
    },
  },
});

const productsSlice = createSlice({
  name: "products",
  initialState: {
    likes: JSON.parse(localStorage.getItem("like")) || [],
    basket: JSON.stringify(localStorage.removeItem("basket")) || [],
    search: "",
  },
  reducers: {
    addToLikes: (state, action) => {
      state.likes.push(action.payload);
      localStorage.setItem("like", JSON.stringify(state.likes));
    },
    addToBasket: (state, action) => {
      state.basket.push(action.payload);
      localStorage.setItem("basket", JSON.stringify(state.basket));
    },
    setSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { setOrder, setOffset } = pageSlice.actions;
export const { addToLikes, addToBasket, setSearch } = productsSlice.actions;

const store = configureStore({
  reducer: {
    page: pageSlice.reducer,
    products: productsSlice.reducer,
  },
});

export default store;
