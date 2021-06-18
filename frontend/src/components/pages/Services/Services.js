import React from 'react';
import '../../../App.css';
import CardItem from '../../Cards/CardItem';
import { Link, useRouteMatch } from 'react-router-dom';
import './Services.css'
import Footer from '../../Footer/Footer';
import ScrollArrow from '../../scrollTop';
export default function Services() {
  let match = useRouteMatch();
  return (
    <>
    <h1 className="titre" >NOS SERVICES</h1>
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
              src='images/hvac.jpg'
              text='La plomberie, le chauffage, le sanitaire et l’HVAC (climatisations, pompes à chaleur et systèmes de ventilation) font partie de nos domaines de prédilection.'
              label='CHAUFFAGE'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-8.jpg'
              text='Service de peinture pour particuliers'
              label='PEINTURE'
              path='/peinture'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Master Services, votre spécialiste en rénovations et transformations à Bruxelles, dans le Brabant Wallon et le Brabant Flamand.'
              label='RÉNOVATION'
              path='/services'
            />

          </ul>
        </div>
        
      </div>
      <ScrollArrow/>
      <Footer/>
    </>
  );
}
