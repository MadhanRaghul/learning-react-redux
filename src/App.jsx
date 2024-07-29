import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import ChocoContainer from './components/ChocoContainer'

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        <ChocoContainer />
      </Provider>
    </>
  )
}

export default App
