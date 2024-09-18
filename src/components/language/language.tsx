import React from 'react'
import Image from 'next/image';
import { useScrollReveal } from '@/hooks/useScrollReveal';
interface ILanguage
{
    img: any;
    title: string;
}

function Language(props: ILanguage) {
  useScrollReveal('.language', {
    origin: 'left',
    distance: '50px',
    duration: 1000,
    delay: 200,
    interval: 100,
  })
  return (
    <div className="flex items-center language justify-center rounded-full overflow-hidden bg-neutral-700 p-3 box-shadow max-[380px]:w-20 max-[380px]:h-20 w-24 h-24 m-auto mt-3 ">
    <Image src={props.img} width={100} height={100} alt={props.title} className='w-3/5' />
    </div>
  )
}

export default Language