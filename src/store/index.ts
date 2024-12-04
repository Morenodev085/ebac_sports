import { configureStore, Store } from "@reduxjs/toolkit";
import carrinhoReducer from './reducers/carrinho';
import  favoritarReducer  from "./reducers/favorito";
import api from "../services/api";

export const store = configureStore({
  reducer: {
    carrinho: carrinhoReducer,
    [api.reducerPath]: api.reducer,  // Aqui foi adicionada a vírgula
    favoritar: favoritarReducer,  // Corrigido com a vírgula no final da linha anterior
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),  // Garantindo a concatenação correta do middleware
});

export type RootReducer = ReturnType<typeof store.getState>;
