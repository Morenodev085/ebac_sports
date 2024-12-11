import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Produto } from '../../App';

// Definindo o tipo do estado
type CarrinhoState = {
  itens: Produto[];
};

// Estado inicial
const initialState: CarrinhoState = {
  itens: [],
};

// Criando o slice
const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload;

      // Verifica se o item já está no carrinho
      if (state.itens.find((produto) => produto.id === item.id)) {
        alert('Item já adicionado!');
      } else {
        state.itens.push(item);
      }
    }
  }
});

// Exporta a ação 'adicionar'
export const { adicionar } = carrinhoSlice.actions;

// Exporta o reducer gerado pelo slice
export default carrinhoSlice.reducer;
