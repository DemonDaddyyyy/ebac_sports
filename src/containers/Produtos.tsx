import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from './store'

import * as S from './styles'

type Props = {
  produtos: ProdutoType[]
  adicionarAoCarrinho: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
}

const ProdutosComponent = ({
  produtos,
  adicionarAoCarrinho,
  favoritar
}: Props) => {
  const favoritos = useSelector((state: RootReducer) => state.favoritos.itens)

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const idsDosFavoritos = favoritos.map((f) => f.id)

    return idsDosFavoritos.includes(produtoId)
  }

  return (
    <>
      <S.Produtos>
        {produtos.map((produto) => (
          <Produto
            estaNosFavoritos={produtoEstaNosFavoritos(produto)}
            key={produto.id}
            produto={produto}
            aoComprar={adicionarAoCarrinho}
            favoritar={favoritar}
          />
        ))}
      </S.Produtos>
    </>
  )
}
export default ProdutosComponent
