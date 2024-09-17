'use client';
import React, { useEffect } from 'react'
import ScrollReveal from 'scrollreveal'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "@/styles/caroucel.css";
import Language from './language/language';
function Languages() {
  const img: any = ["/languages/1.png", "/languages/2.png"];
  const img2: any = ["/languages/2.png", "/languages/3.png", "/languages/4.png"];
  const img3: any = ["/languages/1.png", "/languages/2.png"];
  useEffect(() => {
    ScrollReveal().reveal(".caroucelPerso", {
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        delay: 200,
        reset: false,
        mobile: true
    })
}, [])
  return (
    <div className=" page snap-center flex justify-center items-center">
      <div className="w-screen grid max-sm:grid-cols-3 grid-cols-4 p-7 h-3/4">
        <Language img="/languages/html.png" title="HTML"/>
        <Language img="/languages/css.png" title="CSS"/>
        <Language img="/languages/javascript.png" title="JS"/>
        <Language img="/languages/typescript.png" title="TS"/>
        <Language img="/languages/php.png" title="PHP"/>
        <Language img="/languages/csharp.png" title="c#"/>
        <Language img="/languages/java.png" title="JAVA"/>
        <Language img="/languages/sql.png" title="SQL"/>
        <Language img="/languages/symfony.png" title="SYMFONY"/>
        <Language img="/languages/react.png" title="REACT"/>
        <Language img="/languages/angular.png" title="ANGULAR"/>
        <Language img="/languages/express.png" title="EX"/>
        <Language img="/languages/jira.png" title="JIRA"/>
        <Language img="/languages/bash.png" title="BASH"/>
        <Language img="/languages/postman.png" title="POSTMAN"/>
        <Language img="/languages/figma.png" title="FIGMA"/>
        <Language img="/languages/npm.png" title="NPM"/>















        </div>
        
    </div>
  )
}

export default Languages