import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import ChocoContainer from './components/ChocoContainer'
import UserContainer from './components/UserContainer'

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        <ChocoContainer />
        <UserContainer />
      </Provider>
    </>
  )
}

export default App
