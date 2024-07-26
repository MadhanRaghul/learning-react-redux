import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css'
import CakeContainer from './components/CakeContainer'
import HooksCakeCont from './components/HooksCakeCont'

function App() {
  return (
    <>
      <Provider store={store}>
        <CakeContainer />
        {/* <HooksCakeCont /> */}
      </Provider>
    </>
  )
}

export default App
