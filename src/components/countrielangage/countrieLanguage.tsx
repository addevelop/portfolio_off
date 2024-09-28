import React from 'react'
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
interface ICountrieLanguage
{
    image: string;
    title: string;
    percent: number;
}

function CountrieLanguage(props: ICountrieLanguage) {
  const radius = 40; // Rayon du cercle
  const circumference = 2 * Math.PI * radius; // Circonférence du cercle
  const offset = circumference - (props.percent / 100) * circumference; // Calcul du décalage selon le pourcentage
    useScrollReveal('.level', {
      distance: '0px',
      duration: 1000,
      delay: 200,
      interval: 300,
      easing: 'ease-in-out',
      scale: 1.4,
    });
  return (
    <div className="flex mt-3 level">
      <div className='w-1/6 m-auto '>
        <Image width={1000} height={1000} src={props.image} alt={props.title}/>
      </div>
      <div className="relative flex justify-center items-center w-20 h-20 m-auto">
      <svg className="absolute w-full h-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#e6e6e6" // Couleur de l'arrière-plan du cercle
            strokeWidth="8"
            fill="none"
          />
          <circle
            cx="50"
            cy="50"
            r={radius}
            stroke="#33daff" // Couleur du cercle de progression
            strokeWidth="8"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round" // Pour arrondir le bout du cercle
            className="transition-stroke duration-300 ease-in-out"
            style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }} // Rotation pour démarrer en haut
          />
        </svg>

        {/* Texte du pourcentage au centre */}
        <div className="absolute text-center font-bold text-lg">
          {props.percent}%
        </div>
      </div>
          </div>
  )
}

export default CountrieLanguage