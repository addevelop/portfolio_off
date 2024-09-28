'use client';
import Profil from "@/components/profil";
import Moi from "@/components/moi";
import React, { useState, useRef, useEffect, Suspense } from 'react'
import Profesional from "@/components/profesional"
import Languages from "@/components/languages";
import Background from "@/components/background";
import Contact from "@/components/contact";
import Loading from "@/components/loading/loading";
import Footer from "@/components/footer";

export default function Page() {
  const mainRef = useRef<HTMLDivElement | null>(null);

  const [isLoading, setIsLoading] = useState(false);


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
        <main  ref={mainRef} className="background-page snap-y overflow-y-auto">
          <Background />
          <Profil />
          <Moi />
          <Profesional />
          <Languages />
          <Contact />
          <Footer />
        </main>
      </>
    ) : (
      <div className="w-full h-screen bg-black fixed">
        <Loading />
      </div>
    )}
      
        
      
    </>
    
    
  );
}
