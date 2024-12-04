import { useEffect, useState } from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { Reducer } from '@reduxjs/toolkit'

import { GlobalStyle } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'
import { favoritar } from './store/reducers/favorito'
import { RootReducer } from '../src/store';


export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {


  return (
    <Provider store={store}>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={[]} />
        <Produtos favoritar={favoritar} favoritos={[]}        />
      </div>
    </Provider>
  )
}

export default App
