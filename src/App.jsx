import { Component, useState, useRef } from 'react'
import { Navbar } from './Compnents/Navbar'
import './App.css'
// import { Uppercontent} from './Compnents/Uppercontent'
import Example from './Compnents/Example'
import Carousel from './Compnents/Carousel';
import SplashScreen from './Compnents/SplashScreen';
// import Projects from './Compnents/Projects';
import Projects from './Compnents/Projects';
import Form from './Compnents/Form';
// import ContactForm from './Compnents/Form';


function App() {

  const exampleRef = useRef(null);
  const carouselRef = useRef(null);
  const projectsRef = useRef(null);
  const formRef = useRef(null);

  const scrollToSection = (section) => {
    const offset = 100; // Adjust this offset as needed
    let elementPosition = 0;
    switch (section) {
      case 'example':
        elementPosition = exampleRef.current.offsetTop;
        break;
      case 'carousel':
        elementPosition = document.getElementById('techHeading').offsetTop; // Scroll to the h1 element
        break;
      case 'projects':
        elementPosition = projectsRef.current.offsetTop;
        break;
      case 'contact':
        elementPosition = formRef.current.offsetTop;
        break;
      default:
        break;
    }
    window.scrollTo({
      top: elementPosition - offset,
      behavior: 'smooth'
    });
  };
  

  const slides = [
    {
      image: './src/assets/Frontendimg/React.png',
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
  const Techslides = [
    {
      image: './src/assets/Technologies img/Rest.png',
      title: 'REST API',
    },
    {
      image: './src/assets/Technologies img/Git.png',
      title: 'Git',
    },
    {
      image: './src/assets/Technologies img/Figma.png',
      title: 'Figma',
    },
    {
      image: './src/assets/Technologies img/Adobe.png',
      title: 'Photoshop',
    },
    {
      image: './src/assets/Technologies img/Excel.png',
      title: 'Ms Excel',
    },
    {
      image: './src/assets/Technologies img/Powerpoint.png',
      title: 'Ms Powerpoint',
    },
    {
      image: './src/assets/Technologies img/Word.png',
      title: 'Ms Word',
    },
    // Add more slides as needed
  ];

  const Projectnew = [
    {
      image: './src/assets/Projectsimg/Java.png',
      title: 'Java',
    },
    {
      image: './src/assets/Projectsimg/MayaSpa.jpg',
      title: 'MayaSpa',
    },
    {
      image: './src/assets/Projectsimg/Codewithrv.jpg',
      title: 'Codewithrv',
    },
    {
      image: './src/assets/Projectsimg/Clear.jpg',
      title: 'Clear-clutter',
    },
    {
      image: './src/assets/Projectsimg/Spotify.jpg',
      title: 'Spotify',
    },
    {
      image: './src/assets/Projectsimg/Netflix.png',
      title: 'Netflix',
    },

  ];

  const cardsToShow = 2; // Number of cards to show at a time



  const ProjectsToShow = 3;

  return (
    <>
      <SplashScreen></SplashScreen>
      <Navbar scrollToSection={scrollToSection}></Navbar>

      <Example ref={exampleRef}></Example>

      <h1 id="techHeading" className='text-4xl text-center underline mt-5 text-purple-500 pb-8'>Languages and Tech.</h1>
      <Carousel ref={carouselRef} slides={slides} cardsToShow={cardsToShow} headerImage="./src/assets/Frontendimg/frontend.png" />
      <Carousel ref={carouselRef} slides={backendslides} cardsToShow={cardsToShow} headerImage="./src/assets/Backendimg/Backendimg.png" />
      <Carousel ref={carouselRef} slides={Databaseslides} cardsToShow={cardsToShow} headerImage="./src/assets/Dataimg/Databaseimg.png" />
      <Carousel ref={carouselRef} slides={Techslides} cardsToShow={cardsToShow} headerImage="./src/assets/Technologies img/Techimg.png" />

      <Projects ref={projectsRef} Projslides={Projectnew} ProjectsToShow={ProjectsToShow} />
      <Form ref={formRef} />
      {/* <Form></Form> */}
    </>
  )

};

export default App;
