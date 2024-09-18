'use client';
import Profil from "@/components/profil";
import Moi from "@/components/moi";
import React, { useState, useRef } from 'react'
import Profesional from "@/components/profesional"
import Languages from "@/components/languages";
import Background from "@/components/background";
export default function Page() {
const [scrollPage, setScrollPage] = useState(false);
  const [classShadow, setClassShadow] = useState("hidden");
  const mainRef = useRef<HTMLDivElement | null>(null);


  
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
