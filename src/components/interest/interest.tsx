import React, { useState } from 'react'
import Image from 'next/image';
import { IoIosInformationCircleOutline } from "react-icons/io";
import { useScrollReveal } from '@/hooks/useScrollReveal';
interface IInterest
{
    img: any;
    title: string;
    description: string;
}

function Interest(props: IInterest) {
    useScrollReveal('.interest', {
        distance: '0px',
        duration: 1000,
        delay: 200,
        interval: 300,
        easing: 'ease-in-out',
        scale: 1.4,
      });
    return (
        <div className='w-full grid grid-cols-3 mt-7 interest group'>
            <div className='w-3/6 m-auto'>
                <Image width={1000} height={1000} src={`/interests/${props.img}`} alt={props.title} />
            </div>
            <div className='m-auto text-center'>
                <span>{props.title}</span>
            </div>
            <div className='m-auto text-2xl hover:text-sky-500 cursor-pointer '>
                <IoIosInformationCircleOutline />
            </div>
            {/* Afficher la description au survol de l'icône */}
            <div className='col-span-3 m-auto mt-4 text-center text-gray-700 bg-white rounded-md hidden group-hover:block transition-opacity duration-300'>
                <p>{props.description}</p>
            </div>
        </div>
    );
}

export default Interest