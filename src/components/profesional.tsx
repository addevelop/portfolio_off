import React from 'react'
import Experience from '@/components/experience/experience'
import { Carousel } from 'react-responsive-carousel';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@/styles/caroucel.css";

function Profesional() {
  const img: any = ["/languages/html.png", "/languages/css.png", , "/languages/javascript.png", "/languages/php.png", "/languages/sql.png", "/languages/figma.png"];
  const img2: any = ["/languages/html.png", "/languages/css.png", "/languages/javascript.png", "/languages/php.png", "/languages/csharp.png", "/languages/postman.png"];
  const img3: any = ["/languages/html.png", "/languages/css.png", "/languages/javascript.png", "/languages/angular.png", "/languages/sql.png", "/languages/csharp.png", "/languages/postman.png", "/languages/jira.png"];
  
  useScrollReveal('.caroucelPerso', {
    origin: 'bottom',
    distance: '50px',
    duration: 2000,
    delay: 200,
  });

  return (
    <div id="experiences" className="page flex flex-col justify-center items-center max-w-screen overflow-x-hidden max-sm:mt-10">
            <h2 className='text-3xl text-white box-shadow bg-sky-700 p-2 rounded-md max-sm:text-xl'>Expériences professionnelles</h2>

      <div className="caroucelPerso max-sm:w-screen w-6/12">
        <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showStatus={false}
        // autoPlay={true}
        // dynamicHeight={true}
        emulateTouch={true}
        showThumbs={false}
        >
        <Experience colorTitle="bg-pink-600" title="Développeur" img={img} description={`
          Développement et maintenance d'un outil en interne, permettant la gestion du matériel informatiques.
          <br /><br />
              <ul>
                <li>Développement de fonctionnalitées</li>
                <li>utilisation du QR Code</li>
                <li>Design Web</li>
                <li>architecture du code</li>
              </ul>
          `} />
        <Experience 
              colorTitle="bg-green-800"
              title="Développemeur widget" 
              img={img2} 
              description={`
              Développement de pages web responsive pour des campagne de marketing digital (SMS, EMAIL, RICH SMS).
              <br /><br />
              <ul>
                <li>Programmation de pages web responsive</li>
                <li>prise en compte du besoin client</li>
                <li>UI/UX</li>
                <li>Développement d'API</li>
                <li>Développement d'un générateur de jeu</li>
              </ul>
              `}/>
        <Experience colorTitle="bg-teal-800	" title="Ingégnieur développeur web" img={img3} description={`
        Maintenance de site commercial d'un orpérateur téléphonique.
        <br/><br/>
            <ul>
                <li>Maintenance de sites en .net et angular</li>
                <li>programmation de procédures stockées</li>
                <li>gestion des tâches</li>
                <li>Développement d'API</li>
                <li>Développement de nouvelles fonctions</li>
              </ul>
          `}/>

        </Carousel >
      </div>
        
      </div>
  )
}

export default Profesional