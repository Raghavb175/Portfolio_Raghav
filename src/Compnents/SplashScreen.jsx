import React, { useEffect, useState } from 'react';
import './CSS files/SplashScreen.css'

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000); // Adjust the timeout duration as needed

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="splash-screen">
      <img src="./src/assets/SplashScreen/Logo.png" alt="Logo" className="logo" />
    </div>
  );
};

export default SplashScreen;
