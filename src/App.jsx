import { useState } from 'react'
import Nav from './components/Nav'
import Partners from './pages/Home/Partners'
import Home from './pages/Home/Home'
import NFT from './pages/Home/NFT'

function App() {

  return (
    <>
      <Nav />
      <Home />
      <Partners />
      <NFT />
    </>
  )
}

export default App
