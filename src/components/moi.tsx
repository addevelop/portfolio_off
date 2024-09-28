import React from 'react'
import CountrieLanguage from '@/components/countrielangage/countrieLanguage';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import Interest from './interest/interest';
function Moi() {

    useScrollReveal('.moi', {
        origin: 'left',
        distance: '200%',
        duration: 1000,
        delay: 100,
      });
    
    useScrollReveal('.moi1', {
    origin: 'right',
        distance: '200%',
        duration: 1000,
        delay: 100,
    });
  return (
    <>
    <div id="moi" className="page snap-center flex justify-center items-center text-white">
         <fieldset className="bg-gray-600 box-shadow-1 max-sm:w-11/12 w-6/12 rounded-md hover:shadow-xl moi">
         <legend className="bg-sky-600 block w-fit p-3 m-auto rounded-md font-bold text-2xl"><h2>À propos de moi</h2></legend>
            <p className="text-xl p-3 text-justify">
            Passionné par le développement informatique, je m&apos;épanouis dans la création de solutions innovantes et la résolution de problèmes complexes.<br /><br />
            J&apos;aime apprendre et me tenir à jour avec les dernières technologies.<br /><br />
            Ayant un esprit analytique et créatif, je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences en programmation et en conception web.<br /><br />
            Je suis un développeur rigoureux et attentif aux détails, capable de travailler en autonomie ou en équipe pour mener à bien des projets.
            </p>
         </fieldset>
      </div>
      <div id="competences" className=" page snap-center flex justify-center items-center text-white max-sm:mt-10">
         <fieldset className="bg-gray-600 box-shadow-1 max-sm:w-11/12 w-5/12 rounded-md hover:shadow-xl moi1">
         <legend className="block w-30 p-2 m-auto rounded-md font-bold text-2xl">
            <div className="max-sm:p1 p-3 max-sm:w-3/6 w-5/12 relative m-auto">
                <Image src="/profile.png" width={1000} height={1000} alt="image de Adrien" className="relative z-10 block w-full"/>
                <div className="bg-page w-full bottom-0 left-0 rounded-bl-full rounded-br-full h-2/4 absolute shadow-inner-arc-circle"></div>
            </div>
         </legend>
         <div className="max-sm:p1 p-3">
            <div className="mt-3">
                <h2 className="text-2xl font-bold text-center">Permis</h2>
                <div className="grid grid-cols-2 max-sm:mb-1 max-sm:mt-1 mb-3 mt-3">
                    <div className='p-3'>
                        <Image className='max-sm:w-4/6 w-2/6 float-right' src="/permis/voiture.png" width={1000} height={1000} alt="voiture"/>
                    </div>
                    <div className='p-3'>
                        <Image className='max-sm:w-4/6 w-2/6 float-left' src="/permis/moto.png" width={1000} height={1000} alt="voiture"/>
                    </div>
                </div>
            </div>
            <hr />
            <div className='mt-3'>
                <h2 className="text-2xl font-bold text-center">Langues</h2>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mb-1 max-sm:mt-1 mb-3 mt-3">
                    <CountrieLanguage image={'/countries/francais.png'} title="Français" percent={100}/>
                    <CountrieLanguage image={'/countries/anglais.png'} title="Anglais" percent={50}/>
                    <CountrieLanguage image={'/countries/portugais.png'} title="Espagnol" percent={60}/>
                    <CountrieLanguage image={'/countries/espagnol.png'} title="Portugais" percent={70}/>
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <h2 className="text-2xl font-bold text-center">Centres d&apos;intérêt</h2>
                <div className="grid grid-cols-2 max-sm:grid-cols-1 max-sm:mb-1 max-sm:mt-1 mb-3 mt-3">
                    <Interest img={'technologies.png'} title={'Technologies'} description={'Suivre les dernières tendances et innovations, programmation, gadgets.'}/>
                    <Interest img={'jeux.png'} title={'Jeux'} description={'Jeux vidéo, jeux de société ou puzzles.'}/>
                    <Interest img={'sport.png'} title={'Sport'} description={'Pratique ou suivi de divers sports, que ce soit en tant qu\'athlète ou supporter.'}/>
                    <Interest img={'mecanique.png'} title={'Mécanique auto/moto'} description={'Compréhension des principes de base du mouvement, des forces et des machines.'}/>
                </div>
            </div>

                
         </div>
                

         </fieldset>
      </div>
      </>
  )
}

export default Moi