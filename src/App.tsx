import { useEffect } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'

import { GlobalStyle } from './styles'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { store } from './store'
import { Produto as ProdutoType } from './App'
import { adicionarFav } from './store/reducers/favoritos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  // // Usando Redux para acessar o estado de favoritos e a função de adicionar aos favoritos
  // // const favoritos = useSelector((state: any) => state.favoritos.itens)
  // // const dispatch = useDispatch()

  // // Função de favoritar que dispara a ação do Redux
  // const favoritar = (produto: ProdutoType) => {
  //   dispatch(adicionarFav(produto))  // Adiciona aos favoritos no Redux
  // }

  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        {/* Passando os favoritos e a função favoritar para os componentes */}
        <Header />
        <Produtos />
      </div>
    </Provider>
  )
}

export default App
