import React from 'react';
import '../../../App.css';
import Cards from '../../Cards/Cards';
import HeroSection from '../../HeroSection/HeroSection';
import Footer from '../../Footer/Footer';
import CookieConsent from "react-cookie-consent";



function Home() {
  return (
    <>
      <CookieConsent style={{"background-color" : "#e2e2e2", "color" : "#4545ba"}}  buttonText="OK" buttonStyle={{fontWeight: "bolder", "background-color" : "red", "color":"white"}}>En poursuivant votre navigation sur ce site, vous acceptez l'utilisation de Cookies.</CookieConsent>

      <HeroSection />

      <Cards />
      
      <Footer />
    </>
  );
}

export default Home;
