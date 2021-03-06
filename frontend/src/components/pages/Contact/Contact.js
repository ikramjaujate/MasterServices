import React from 'react';
import '../../../App.css';
import './Contact.css'
import Footer from '../../Footer/Footer';
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'


export default function Contact() {
  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('service_s563wmf', 'template_jbllr8f', e.target, "user_uKj51RakAAFPe2cQazwMo")
    .then(res =>{
      Swal.fire(
        'Votre message a bien été envoyé',
        'Nous vous contacterons le plus vite possible ',
        'success'
      )
      //console.log(res)
    }).catch(err=>console.log(err))
  }
  return (
    <>
    <section id="contact">
      <div class="sectionheader">	<h1>CONTACT</h1></div>
      <article>
      <p>Besoin plus d'information ou d'un devis, n'hésitez pas à nous contacter.</p>
        
          <label for="checkcontact" class="contactbutton"><div class="mail"></div></label><input id="checkcontact" type="checkbox"/>
      
          <form onSubmit={sendEmail} class="contactform">
            <p class="input_wrapper"><input type="text" name="contact_nom" id ="contact_nom"/><label for="contact_nom">NOM</label></p>
            <p class="input_wrapper"><input type="text" name="contact_email" id ="contact_email"/><label for="contact_email">EMAIL</label></p>
            <p class="input_wrapper"><input type="text" name="contact_sujet" id ="contact_sujet"/><label for="contact_sujet">SUJET</label></p>
            <p class="textarea_wrapper"><textarea name="contact_message" id="contact_message"></textarea></p>
            <p class="submit_wrapper"><input type="submit" value="ENVOYER"/></p>			
          </form>
      </article>
    </section>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2521.606984559439!2d4.287394915744147!3d50.80139177952537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c67b2fd64f4d%3A0x88cb5f1a4265e337!2sKoning%20Albertstraat%2024%2C%201600%20Sint-Pieters-Leeuw!5e0!3m2!1ses!2sbe!4v1623867801078!5m2!1ses!2sbe" 
  width="600" height="450" style={{"border":"0;"}} allowfullscreen="" loading="lazy"></iframe>
  <Footer/>
  </>
  );
}
