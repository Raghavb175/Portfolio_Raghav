import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Compnents/Navbar'
import './App.css'
import { Uppercontent} from './Compnents/Uppercontent'

function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Uppercontent></Uppercontent>
    </>
  )
}

export default App
