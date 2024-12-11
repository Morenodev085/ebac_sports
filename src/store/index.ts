import { configureStore } from "@reduxjs/toolkit";

import carrinhoReducer from './reducers/carrinho'
import favoritarReducer from './reducers/favoritos'
import api from "../services/api";

export const store = configureStore({
  reducer: {
    favoritar: favoritarReducer,
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
