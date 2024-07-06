import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Compnents/Navbar'
import './App.css'
// import { Uppercontent} from './Compnents/Uppercontent'
import { Example } from './Compnents/Example'

function App() {
  
  return (
    <>
    <Navbar></Navbar>
    <Example></Example>
    {/* <Uppercontent></Uppercontent> */}
    </>
  )
}

export default App
