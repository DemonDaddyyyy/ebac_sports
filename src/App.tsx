import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { AppDispatch } from './containers/store'
import { useDispatch } from 'react-redux'
import { adicionar } from './containers/store/reducers/carrinho'
import { favoritar } from './containers/store/reducers/favoritos'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const [produtos, setProdutos] = useState<Produto[]>([])
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/ebac_sports')
      .then((res) => res.json())
      .then((res) => setProdutos(res))
  }, [])

  function adicionarAoCarrinho(produto: Produto) {
    dispatch(adicionar(produto))
  }

  function favoritarProduto(produto: Produto) {
    dispatch(favoritar(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritar={favoritarProduto}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
