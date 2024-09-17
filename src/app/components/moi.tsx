'use client';
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import { FaCar, FaGamepad, FaMotorcycle } from 'react-icons/fa'
import { FR, US, ES, PT } from 'country-flag-icons/react/3x2'
import Item from '@/app/components/Item/Item';
import { FaComputer } from 'react-icons/fa6';
import Image from 'next/image';
function Moi() {
    useEffect(() => {
        ScrollReveal().reveal(".moi", {
            origin: 'left',
            distance: '200%',
            duration: 2000,
            delay: 100,
            reset: false,
            mobile: true
        })

        ScrollReveal().reveal(".moi1", {
            origin: 'right',
            distance: '200%',
            duration: 2000,
            delay: 100,
            reset: false,
            mobile: true
        })
    }, [])
  return (
    <>
    <div id="moi" className="page snap-center flex justify-center items-center text-white">
         <fieldset className="bg-gray-600 box-shadow-1 w-11/12 rounded-md hover:shadow-xl moi">
         <legend className="bg-sky-600 block w-fit p-3 m-auto rounded-md font-bold text-2xl">Moi</legend>
            <p className="text-xl p-3 text-justify">
                La technologie évolue rapidement, et j&apos;adore être à la pointe des dernières avancées pour rester compétitif et trouver des solutions créatives.
                <br />
                <br />
                Développer est ma passion, car j&apos;aime créer quelque chose à partir de rien et voir un projet évoluer de la conception à la réalisation.
                <br />
                <br />
                Ma curiosité insatiable me pousse à explorer divers domaines, à poser des questions et à rechercher des réponses pour découvrir de nouvelles perspectives.
            </p>
         </fieldset>
      </div>
      <div id="competences" className=" page snap-center flex justify-center items-center text-white">
         <fieldset className="bg-gray-600 box-shadow-1 w-11/12 rounded-md hover:shadow-xl moi1">
         <legend className="block w-fit p-2 m-auto rounded-md font-bold text-2xl">
            <div className="max-sm:p1 p-3 w-3/6 relative m-auto">
                <Image src="/profile.png" alt="image de Adrien" className="relative z-10 block"/>
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