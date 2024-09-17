'use client';
import Image from "next/image";
import Profil from "@/app/components/profil";
import Moi from "@/app/components/moi";
import React, { useState, useRef } from 'react'
import { useDebouncedCallback } from "use-debounce";
import OutilPosition from "@/outils/OutilPosition";
import Profesional from "@/app/components/profesional"
import Languages from "./components/languages";
import Background from "./background";
export default function Home() {
const [scrollPage, setScrollPage] = useState(false);
  const [classShadow, setClassShadow] = useState("hidden");
  const mainRef = useRef<HTMLDivElement | null>(null);
  window.addEventListener('scroll', function(){
    if(mainRef.current)
      {
        setScrollPage(OutilPosition.windowScrolledPage(1));
        setClassShadow(scrollPage ? '' : 'hidden');
      }
  })

  
  return (
    <div  ref={mainRef} className="snap-y overflow-y-auto">
      <Background />
          <div className={`shadow-t ${scrollPage ? '' : 'hidden'} animation-fade`}></div>
      <Profil />
      <Moi />
      <Profesional />
      <Languages />
           <div className={`shadow-b ${scrollPage ? '' : 'hidden'} animation-fade`}></div>
    </div>
  );
}
