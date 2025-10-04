import { useState } from 'react'
import Nav from './components/Nav'
import Partners from './pages/Home/Partners'
import Home from './pages/Home/Home'
import NFT from './pages/Home/NFT'
import Users from './pages/Home/Users'
import Steps from './pages/Home/Steps'
import Roadmap from './pages/Home/Roadmap'
import FAQ from './pages/Home/FAQ'

function App() {

  return (
    <>
      <Nav />
      <Home />
      <Partners />
      <NFT />
      <Users />
      <Steps />
      <Roadmap />
      <FAQ />
    </>
  )
}

export default App
