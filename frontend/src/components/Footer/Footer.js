import React from 'react';
import './Footer.css';
import { Button} from '../Button/Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>

        <p className='footer-subscription-text'>
          INSCRIVEZ-VOUS À LA NEWSLETTER
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='VOTRE EMAIL'
            />
            <Button buttonStyle='btn--outline'>SOUSCRIRE</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>À PROPOS DE NOUS</h2>
            <p class="description">
            Notre société Master Services réalise des petits et grands projets dans l’électricité de bâtiments industriels, dans le domaine de construction et rénovation ainsi que la gestion technique.


            </p>
          </div>
          
          <div className='footer-link-wrapper'>
            <div class='footer-link-items'>
            <h2>CONTACT</h2>
            <a href="https://goo.gl/maps/bpSveeLki26F54mS7" > <i class="far fa-map"></i>  Koning Albertstraat 24, 1600 Sint-Pieters-Leeuw</a>
            <a href="tel:+32479033285"><i class="fas fa-mobile-alt"></i>  +32 479 03 32 85</a>
            <a href="mailto:info@masterservices.be"><i class="far fa-envelope"></i>  info@masterservices.be</a>
          </div>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <Link to='/'>Facebook</Link>

          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              MASTER SERVICES
              
              <img src={'images/logo.png'}  />
            </Link>
          </div>
          <small class='website-rights'>MASTER SERVICES © 2021</small>
          <div class='social-icons'>
            <Link
              class='social-icon-link facebook'
              to='https://www.facebook.com/MasterServicesBelgiques/'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </Link>

            <Link
              class='social-icon-link twitter'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
