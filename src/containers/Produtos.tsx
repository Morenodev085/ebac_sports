import { useDispatch, useSelector } from 'react-redux'  // Importando useSelector
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { adicionarFav } from '../store/reducers/favoritos'  // Certifique-se de que a ação 'adicionarFav' está correta
import * as S from './styles'

const ProdutosComponent = () => {
  const dispatch = useDispatch()

  // Usando useSelector para pegar os favoritos da store
  const favoritos = useSelector((state: any) => state.favoritar.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const favoritosIds = new Set(favoritos.map((f) => f.id))
    return favoritosIds.has(produto.id)
  }

  const { data: produtos, isLoading, isError } = useGetProdutosQuery()

  if (isLoading) return <h2>Carregando...</h2>
  if (isError) return <h2>Erro ao carregar os produtos</h2> // Tratamento de erro

  const favoritar = (produto: ProdutoType) => {
    dispatch(adicionarFav(produto)) // Usando o dispatch para adicionar aos favoritos
  }

  return (
    <S.Produtos>
      {produtos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
          favoritar={favoritar}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
