import { useState } from 'react'
import './App.css'
import { Clock } from './clockComponents/Clock'
import { StartBtn } from './clockComponents/StartBtn'
import { TopBtns } from './clockComponents/TopBtns'
import { Header } from './Header/Header'

function App() {
  return (
    <>
      <Header />
      <div id='promodoro'>
      <TopBtns />
      <Clock />
      <StartBtn />
      </div>
    </>
  )
}

export default App
