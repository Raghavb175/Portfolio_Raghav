import { Component, useState } from 'react'
import { Navbar } from './Compnents/Navbar'
import './App.css'
// import { Uppercontent} from './Compnents/Uppercontent'
import { Example } from './Compnents/Example'
import Carousel from './Compnents/Carousel';

function App() {
  const slides = [
    {
      image: './src/assets/Frontendimg/Html.png',
      title: 'HTML',
      description: 'Description for Slide 1',
    },
    {
      image: './src/assets/Frontendimg/Css.png',
      title: 'CSS5',
      description: 'Description for Slide 2',
    },
    {
      image: './src/assets/Frontendimg/Js.png',
      title: 'JAVASCRIPT',
      description: 'Description for Slide 3',
    },
    {
      image: './src/assets/Frontendimg/react.png',
      title: 'REACT',
      description: 'Description for Slide 4',
    },
    {
      image: './src/assets/Frontendimg/Nextjs.png',
      title: 'NEXT.JS',
      description: 'Description for Slide 2',
    },
    // Add more slides as needed
  ];

  const cardsToShow = 2; // Number of cards to show at a time


  return (
    <>
    <Navbar></Navbar>
    <Example></Example>
    <Carousel slides={slides} cardsToShow={cardsToShow} />
    </>
  )
}

export default App
