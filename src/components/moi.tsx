import React from 'react'
import { FaCar, FaGamepad, FaMotorcycle } from 'react-icons/fa'
import { FR, US, ES, PT } from 'country-flag-icons/react/3x2'
import Item from '@/components/Item/Item';
import { FaComputer } from 'react-icons/fa6';
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
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
         <legend className="bg-sky-600 block w-fit p-3 m-auto rounded-md font-bold text-2xl">À propos de moi</legend>
            <p className="text-l p-3 text-justify">
            Passionné par le développement informatique, je m&apos;épanouis dans la création de solutions innovantes et la résolution de problèmes complexes.<br /><br />
            J&apos;aime apprendre et me tenir à jour avec les dernières technologies.<br /><br />
            Ayant un esprit analytique et créatif, je suis toujours à la recherche de nouveaux défis pour améliorer mes compétences en programmation et en conception web.<br /><br />
            Je suis un développeur rigoureux et attentif aux détails, capable de travailler en autonomie ou en équipe pour mener à bien des projets.
            </p>
         </fieldset>
      </div>
      <div id="competences" className=" page snap-center flex justify-center items-center text-white">
         <fieldset className="bg-gray-600 box-shadow-1 max-sm:w-11/12 w-4/12 rounded-md hover:shadow-xl moi1">
         <legend className="block w-30 p-2 m-auto rounded-md font-bold text-2xl">
            <div className="max-sm:p1 p-3 max-sm:w-3/6 w-5/12 relative m-auto">
                <Image src="/profile.png" width={1000} height={1000} alt="image de Adrien" className="relative z-10 block w-full"/>
                <div className="bg-page w-full bottom-0 left-0 rounded-bl-full rounded-br-full h-2/4 absolute shadow-inner-arc-circle"></div>
            </div>
         </legend>
         <div className="max-sm:p1 p-3">
            <div className="mt-3">
                <h2 className="text-2xl font-bold">Permis</h2>
                <div className="flex max-sm:mb-1 max-sm:mt-1 mb-3 mt-3">
                    <div className="flex-1 flex justify-center items-center">
                    B&nbsp;<FaCar />
                    </div>
                    <div className="flex-1 flex justify-center items-center">
                    A&nbsp;<FaMotorcycle />
                    </div>
                </div>
            </div>
            <hr />
            <div className='mt-3'>
                <h2 className="text-2xl font-bold">Langues</h2>
                <div className="flex flex-col max-sm:mb-1 max-sm:mt-1 mb-3 mt-3">
                    <Item icon={<FR className='flag'/>} title="Français"/>
                    <Item icon={<US className='flag'/>} title="Anglais"/>
                    <Item icon={<ES className='flag'/>} title="Espagnol"/>
                    <Item icon={<PT className='flag'/>} title="Portugais"/>
                </div>
            </div>
            <hr />
            <div className="mt-3">
                <h2 className="text-2xl font-bold">Centres d&apos;intérêt</h2>
                <div className="flex flex-col max-sm:mb-1 max-sm:mt-1 mb-3 mt-3">
                    <Item icon={<FaComputer className="flag"/>} title="Informatique"/>
                    <Item icon={<FaMotorcycle className="flag"/>} title="Moto"/>
                    <Item icon={<FaGamepad className="flag"/>} title="Jeux vidéo"/>
                </div>
            </div>

                
         </div>
                

         </fieldset>
      </div>
      </>
  )
}

export default Moi