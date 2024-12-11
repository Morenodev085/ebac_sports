import { useDispatch } from 'react-redux'
import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

import { adicionar } from '../../store/reducers/carrinho'
import { adicionarFav, removerFav } from '../../store/reducers/favoritos'

type Props = {
  produto: ProdutoType
  estaNosFavoritos: boolean
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({
  produto,
  estaNosFavoritos
}: Props) => {
  const dispatch = useDispatch()

  // Função para adicionar/remover do favoritos
  const handleFavoritar = () => {
    if (estaNosFavoritos) {
      // Se já está nos favoritos, removemos
      dispatch(removerFav(produto.id))  // Passando o ID para remover do estado
    } else {
      // Se não está nos favoritos, adicionamos
      dispatch(adicionarFav(produto))  // Passando o produto para adicionar aos favoritos
    }
  }

  // Função para adicionar o produto ao carrinho
  const handleAdicionarCarrinho = () => {
    dispatch(adicionar(produto))  // Adiciona o produto ao carrinho
  }

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>

      {/* Botão de Favoritos */}
      <S.BtnComprar onClick={handleFavoritar} type="button">
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>

      {/* Botão de Carrinho */}
      <S.BtnComprar onClick={handleAdicionarCarrinho} type="button">
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
