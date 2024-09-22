import React, { useEffect } from 'react'
import { useScrollReveal } from '@/hooks/useScrollReveal';
import ButtonContainer from './buttonContainer';
import Image from 'next/image';
function Profil() {
    
  return (
    <div className="bg-profil page profil p-3 flex flex-col">
      <div className="max-[450px]:block flex align-center justify-center md:flex-1">
        <div className=" relative rounded-full overflow-hidden place-items-center m-auto w-[20vw] sm:h-auto max-[450px]:h-[40vw] max-[450px]:w-[40vw] flex-1">
          {/* <Image src="/logo.png" width={1000} height={1000} alt="logo" className="logo-photo absolute w-full top-0 left-0"/> */}
          <Image src="/pro.png" width={400} height={400} alt="photo de Adrien" className="max-[450px]:w-full w-2/4 m-auto"/>
        </div>
        <div className="mt-10 max-[450px]:text-center text-white font-bold flex-1 flex flex-col justify-center">
          <h3 className="text-3xl" style={{textShadow: '0px 1px 3px white'}} >Adrien RODRIGUES</h3>
          <br />
          <h6 className="text-base text-xl">Développeur web</h6>
        </div>
      </div>

        <div className="md:flex-1 flex align-center justify-center">
          <ButtonContainer appearClass={'buttonAppear'}/>
        </div>
      </div>
  )
}

export default Profil