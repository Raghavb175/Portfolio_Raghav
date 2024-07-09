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
      image: './src/assets/Frontendimg/react.png',
      title: 'REACT',
    },
    {
      image: './src/assets/Frontendimg/Nextjs.png',
      title: 'NEXT.JS',
    },
    {
      image: './src/assets/Frontendimg/Js.png',
      title: 'JAVASCRIPT',
    },
    {
      image: './src/assets/Frontendimg/Wordpress.png',
      title: 'Wordpress',
    },
    {
      image: './src/assets/Frontendimg/EJS.png',
      title: 'EJS',
    },
    {
      image: './src/assets/Frontendimg/Boot.png',
      title: 'Bootstrap',
    },
    {
      image: './src/assets/Frontendimg/Html.png',
      title: 'HTML',
    },
    {
      image: './src/assets/Frontendimg/Css.png',
      title: 'CSS5',
    },
    {
      image: './src/assets/Frontendimg/Tailwind.png',
      title: 'Tailwind.css',
    },
    // Add more slides as needed
  ];




  const backendslides = [
    {
      image: './src/assets/Backendimg/Node.png',
      title: 'Node.js',
    },
    {
      image: './src/assets/Backendimg/Java.png',
      title: 'Java',
    },
    {
      image: './src/assets/Backendimg/Python.png',
      title: 'Python',
    },
    {
      image: './src/assets/Backendimg/EJS.png',
      title: 'EJS',
    },
    {
      image: './src/assets/Backendimg/Express.png',
      title: 'Express',
    },
    {
      image: './src/assets/Backendimg/Wordpress.png',
      title: 'Wordpress',
    },
    // Add more slides as needed
  ];
  const Databaseslides = [
    {
      image: './src/assets/Dataimg/Oracle.png',
      title: 'ORACLE',
    },
    {
      image: './src/assets/Dataimg/MySQL.png',
      title: 'MySQL',
    },
    {
      image: './src/assets/Dataimg/MongoDB.png',
      title: 'MongoDB',
    },
    {
      image: './src/assets/Dataimg/Mongoose.png',
      title: 'Mongoose',
    },
    {
      image: './src/assets/Dataimg/SQL.png',
      title: 'SQL',
    },
   
    // Add more slides as needed
  ];




  const cardsToShow = 2; // Number of cards to show at a time


  return (
    <>
    <SplashScreen></SplashScreen>
    <Navbar></Navbar>
    <Example></Example>
    <Carousel slides={slides} cardsToShow={cardsToShow} headerImage="./src/assets/Frontendimg/frontend.png" />
    <Carousel slides={backendslides} cardsToShow={cardsToShow}headerImage="./src/assets/Backendimg/Backendimg1.png" />
    <Carousel slides={Databaseslides} cardsToShow={cardsToShow} headerImage="./src/assets/Dataimg/Databaseimg.png" />
    </>
  )
}

export default App
