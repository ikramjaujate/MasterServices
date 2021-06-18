import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';
import ScrollArrow from '../scrollTop';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
    <img className="accueil"src={'/images/bat.jpg'} />
      <h1>MASTER SERVICES</h1>
      <p>SPÉCIALISTE DES TRAVAUX DE RÉNOVATION ET CONSTRUCTION</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          NOS SERVICES
        </Button>

      </div>
    </div>
    <ScrollArrow/>
    </>

  );
}

export default HeroSection;
