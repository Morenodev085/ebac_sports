import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'

import * as S from './styles'

const produtosComponent = () => {
  const dispatch = useDispatch()



  const ProdutosComponent = ({
    favoritos,
    favoritar
  }: Props) => {
    const produtoEstaNosFavoritos = (produto: ProdutoType) => {
      const produtoId = produto.id
      const IdsDosFavoritos = favoritos.map((f) => f.id)

      return IdsDosFavoritos.includes(produtoId)
    }
    const {data: produtos, isLoading} = useGetProdutosQuery()

    if(isLoading) return <h2>Carregando...</h2>
    return (
      <>
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
    </>
  )
}
}

export default ProdutosComponent
