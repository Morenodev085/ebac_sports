import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto} from "../../App";



type favoritoState ={
  itens: Produto [];
};

const initialState : favoritoState = {
  itens: []
}

const favoritoSlice = createSlice ({
  name: 'favorito',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const favProd = action.payload;

      if(state.itens.find(item => item.id === favProd.id)) {
        alert("o item ja está nos seus favoritos!");
      } else{
        state.itens.push(favProd)
      }
    }
  }
})


export const {favoritar} = favoritoSlice.actions
export default favoritoSlice.reducer


// function favoritar(produto: Produto) {
//   if (favoritos.find((p) => p.id === produto.id)) {
//     const favoritosSemProduto = favoritos.filter((p) => p.id !== produto.id)
//     setFavoritos(favoritosSemProduto)
//   } else {
//     setFavoritos([...favoritos, produto])
//   }
// }
