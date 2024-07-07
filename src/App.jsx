import { Component, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './Compnents/Navbar'
import './App.css'
// import { Uppercontent} from './Compnents/Uppercontent'
import { Example } from './Compnents/Example'
import Carousel from './Compnents/Carousel';

function App() {
  const slides = [
    {
      image: '/path_to_image_1.jpg',
      title: 'Slide 1',
      description: 'Description for Slide 1',
    },
    {
      image: '/path_to_image_2.jpg',
      title: 'Slide 2',
      description: 'Description for Slide 2',
    },
    {
      image: '/path_to_image_3.jpg',
      title: 'Slide 3',
      description: 'Description for Slide 3',
    },
    {
      image: '/path_to_image_4.jpg',
      title: 'Slide 4',
      description: 'Description for Slide 4',
    },
    {
      image: '/path_to_image_2.jpg',
      title: 'Slide 2',
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
