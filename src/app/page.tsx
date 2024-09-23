'use client';
import Profil from "@/components/profil";
import Moi from "@/components/moi";
import React, { useState, useRef, useEffect, Suspense } from 'react'
import Profesional from "@/components/profesional"
import Languages from "@/components/languages";
import Background from "@/components/background";
import Contact from "@/components/contact";
import Loading from "@/components/loading/loading";

export default function Page() {
const [scrollPage, setScrollPage] = useState(false);
  const [classShadow, setClassShadow] = useState("hidden");
  const mainRef = useRef<HTMLDivElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);

  const handleLoad = () => {
    console.log('ok');
    setIsLoading(true);
  }

  useEffect(() => {
      if(document.readyState === 'complete')
      {
        setIsLoading(true);
      }
      else
      {
        const handleLoad = () => {
          setIsLoading(true);
      }
      window.addEventListener('load', handleLoad);
    }
  }, [])
  
  return (
    <>
    {isLoading ? (
      <>
        <div  ref={mainRef} className="background-page snap-y overflow-y-auto">
          <Background />
              <div className={`shadow-t ${scrollPage ? '' : 'hidden'} animation-fade`}></div>
          <Profil />
          <Moi />
          <Profesional />
          <Languages />
          <Contact />
              <div className={`shadow-b ${scrollPage ? '' : 'hidden'} animation-fade`}></div>
        </div>
      </>
    ) : (
      <div className="w-full h-screen bg-black fixed">
        <Loading />
      </div>
    )}
      
        
      
    </>
    
    
  );
}
