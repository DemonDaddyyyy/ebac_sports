import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../../App'

type CarrinhoState = {
  itens: Produto[]
}

const initialState: CarrinhoState = {
  itens: []
}

const CarrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,

  reducers: {
    adicionar: (state, action: PayloadAction<Produto>) => {
      const item = action.payload

      if (state.itens.find((produto) => produto.id === item.id)) {
        alert(`Item já adicionado`)
      } else {
        state.itens.push(item)
      }
    }
  }
})

export const { adicionar } = CarrinhoSlice.actions
export default CarrinhoSlice.reducer
