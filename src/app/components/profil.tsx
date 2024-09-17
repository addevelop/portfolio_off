'use client';
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import ButtonContainer from '@/ui/buttons/buttonContainer';
function Profil() {
    useEffect(() => {
        ScrollReveal().reveal(".profil", {
            origin: 'bottom',
            distance: '50px',
            duration: 2000,
            delay: 200,
            reset: false,
            mobile: true
        })
    }, [])
  return (
    <div className="bg-profil page profil p-3">
          <div className=" relative rounded-full overflow-hidden place-items-center m-auto" style={{width: '40vw', height: '40vw'}}>
          <img src="/logo.png" className="logo-photo absolute w-full top-0 left-0"/>
          <img src="/pro.png"/>
        </div>
        <div className="mt-10 text-center text-white font-bold">
          <h3 className="text-xl" style={{textShadow: '0px 1px 3px white'}} >Adrien RODRIGUES</h3>
          <br />
          <h6 className="text-base">Développeur web</h6>
        </div>
        <div>
          <ButtonContainer appearClass={'buttonAppear'}/>
        </div>
      </div>
  )
}

export default Profil