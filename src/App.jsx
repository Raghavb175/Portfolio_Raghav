import { Component, useState } from 'react'
import { Navbar } from './Compnents/Navbar'
import './App.css'
// import { Uppercontent} from './Compnents/Uppercontent'
import { Example } from './Compnents/Example'
import Carousel from './Compnents/Carousel';
import SplashScreen from './Compnents/SplashScreen';

function App() {

  const slides = [
    {
      image: './src/assets/Frontendimg/Html.png',
      title: 'HTML',
    },
    {
      image: './src/assets/Frontendimg/Css.png',
      title: 'CSS5',
    },
    {
      image: './src/assets/Frontendimg/Js.png',
      title: 'JAVASCRIPT',
    },
    {
      image: './src/assets/Frontendimg/react.png',
      title: 'REACT',
    },
    {
      image: './src/assets/Frontendimg/Nextjs.png',
      title: 'NEXT.JS',
    },
    // Add more slides as needed
  ];

  const cardsToShow = 2; // Number of cards to show at a time


  return (
    <>
    <SplashScreen></SplashScreen>
    <Navbar></Navbar>
    <Example></Example>
    <Carousel slides={slides} cardsToShow={cardsToShow} />
    </>
  )
}

export default App
