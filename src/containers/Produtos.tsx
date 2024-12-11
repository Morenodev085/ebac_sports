import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { useDispatch, useSelector } from 'react-redux'
import { adicionarFav } from '../store/reducers/favoritos'
import * as S from './styles'

// Componente de Produtos
const ProdutosComponent = () => {
  // Definindo a tipagem do estado usando o tipo correto para o Redux
  const favoritos = useSelector((state: { favoritos: { itens: ProdutoType[] } }) => state.favoritos.itens)

  // Usando o hook useDispatch para despachar ações
  const dispatch = useDispatch()

  // Função que verifica se o produto está nos favoritos
  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    return favoritos.some((f) => f.id === produto.id)
  }

  // Desestruturando a resposta da API
  const { data: produtos, isLoading } = useGetProdutosQuery()

  // Exibindo uma mensagem de carregamento enquanto os produtos não chegam
  if (isLoading) return <h2>Carregando...</h2>

  // Função para adicionar aos favoritos
  const handleFavoritar = (produto: ProdutoType) => {
    dispatch(adicionarFav(produto))  // Despacha a ação para adicionar aos favoritos
  }

  return (
    <>
      <S.Produtos>
        {produtos?.map((produto) => (
          <Produto
            key={produto.id}
            produto={produto}
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            favoritar={() => handleFavoritar(produto)} // Usando a função definida antes
          />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
