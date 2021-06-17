import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>Pourquoi nous choisir ?</h1>
      <div class="col-xl-6 col-lg-6 col-md pr-0">
      <div className='cards__container'>
        <div className='cards__wrapper'>
      <p class="safe-pera-one">Master Services est une entreprise spécialisée dans les travaux d’électricité générale et de l’HVAC à savoir la ventilation, la climatisation, la réfrigération, la régulation ainsi que le chauffage.</p>
      <p class="safe-pera-one">Nous assurons l’installation, la maintenance, la rénovation, et le dépannage sur tous types de chantiers : particuliers, professionnels, courant fort, courant faible.</p>
      <p class="safe-pera-one">Choisir Master Services c'est choisir la qualité. Pour nous, une implication totale est capitale. Nous fournissons des installations de qualité et nous vous prodiguons dès le début des conseils sur mesure.</p>
      <p class="safe-pera-one">Conscients de l’importance du respect des normes en vigueur, nous utilisons des matériaux agréés et de qualité, vous garantissant ainsi la qualité et la fiabilité avec laquelle vos projets méritent d’être élaborés.</p>
</div>
</div></div>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
