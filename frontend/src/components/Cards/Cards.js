import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='cards'>
      
      <h1>QUI SOMMES-NOUS ?</h1>
      <div class="col-xl-6 col-lg-6 col-md pr-0">
      <div className='cards__container'>
        <div className='cards__wrapper'>
      <p class="safe-pera-one">Master Services est une entreprise spécialisée dans les travaux d’électricité générale et de l’HVAC à savoir la ventilation, la climatisation, la réfrigération, la régulation ainsi que le chauffage.</p>
      <p class="safe-pera-one">Nous assurons l’installation, la maintenance, la rénovation, et le dépannage sur tous types de chantiers : particuliers, professionnels, courant fort, courant faible.</p>
      <p class="safe-pera-one">Choisir Master Services c'est choisir la qualité. Pour nous, une implication totale est capitale. Nous fournissons des installations de qualité et nous vous prodiguons dès le début des conseils sur mesure.</p>
      <p class="safe-pera-one">Conscients de l’importance du respect des normes en vigueur, nous utilisons des matériaux agréés et de qualité, vous garantissant ainsi la qualité et la fiabilité avec laquelle vos projets méritent d’être élaborés.</p>
</div>
</div></div>
      <h1>NOS SERVICES</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Nous prenons en charge les installations, rénovations et remises aux normes électriques de tous types !'
              label='ÉLÉCTRICITÉ'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Master Services, votre spécialiste en rénovations et transformations à Bruxelles, dans le Brabant Wallon et le Brabant Flamand.'
              label='RÉNOVATION'
              path='/services'
            />
            <CardItem
              src='images/img-8.jpg'
              text='La plomberie, le chauffage, le sanitaire et l’HVAC (climatisations, pompes à chaleur et systèmes de ventilation) font partie de nos domaines de prédilection.'
              label='CHAUFFAGE'
              path='/services'
            />
          </ul>
        </div>
        <Link to='/services' className="arrow-right"> TOUS NOS SERVICES  <i class="fas fa-arrow-right"> </i></Link>
      </div>
      
    </div>
  );
}

export default Cards;
