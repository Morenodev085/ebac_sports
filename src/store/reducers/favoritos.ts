import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from "../../App"

type FavoritarState ={
  itens: Produto[];
}

const initialState: FavoritarState = {
  itens: [],
};

const favoritarSlice = createSlice ({
  name: 'favorito',
  initialState,
  reducers: {
    adicionarFav: (state, action: PayloadAction<Produto>) =>{
      const favort = action.payload;

      if(state.itens.find((produto) => produto.id === favort.id)){
        alert('O item ja esta nos favoritos');
      }else{
        state.itens.push(favort);
      }
    },
    removerFav: (state, action: PayloadAction<number>) =>{
      const idProduto = action.payload;
      state.itens = state.itens.filter((produto) => produto.id !== idProduto );
    }
  }
});

export const { adicionarFav, removerFav} = favoritarSlice.actions;

export default favoritarSlice.reducer;

