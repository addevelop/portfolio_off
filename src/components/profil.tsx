import React, { useEffect } from 'react'
import ButtonContainer from './buttonContainer';
import Image from 'next/image';
import typeWriterAnimation from '@/scripts/animationText.js';
function Profil() {
    
  useEffect(() => {
    typeWriterAnimation(
      {
        id: "title", 
        duration: 3000, 
        pause: 2000, 
        deleteTime: 1000, 
        transitionDelay: 500,
        textes: ["Adrien RODRIGUES.",  "développeur full-stack."]
      });
  }, [])
  return (
    <div className="bg-profil page profil p-3 flex flex-col">
      <div className="max-[450px]:block flex align-center justify-center md:flex-1">
        <div className=" relative rounded-full overflow-hidden place-items-center m-auto w-[20vw] sm:h-auto max-[450px]:h-[40vw] max-[450px]:w-[40vw] flex-1">
          <Image src="/pro.png" width={400} height={400} alt="photo de profil de Adrien Rodrigues développeur full-stack" className="max-[450px]:w-full w-2/4 m-auto"/>
        </div>
        <div className="mt-10 max-[450px]:text-center text-white font-bold flex-1 flex flex-col justify-center">
          <h1 className='text-4xl max-sm:text-xl'>Bienvenue sur mon <span className='underline decoration-sky-500'>portfolio</span></h1>
          <br />
          <h1 className="text-3xl max-sm:text-xl max-sm:mt-3 mt-7" > Je suis <span className='bg-sky-600 p-1'><span id="title">Adrien Rodrigues</span><span className='trait'>|</span></span></h1>

        </div>
      </div>

        <div className="md:flex-1 flex align-center justify-center">
          <ButtonContainer appearClass={'buttonAppear'}/>
        </div>
      </div>
  )
}

export default Profil