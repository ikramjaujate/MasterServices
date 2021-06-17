import React from 'react';
import '../../App.css';
import { Button } from '../Button/Button';
import './HeroSection.css';
import ScrollArrow from '../scrollTop';

function HeroSection() {
  return (
    <>
    <div className='hero-container'>
      <img class="accueil"alt="accueil" src="/images/construction.jpeg"/>
      
      <h1>AU SERVICE DE VOTRE CONFORT</h1>
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
