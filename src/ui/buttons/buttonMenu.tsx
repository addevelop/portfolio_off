'use client';
import ScrollReveal from "scrollreveal";
import { useEffect } from 'react'
import IButtonMenu from "@/ui/interfaces/IButtonMenu";
const ButtonMenu: React.FC<IButtonMenu> = (props) => {
  useEffect(() => {
    ScrollReveal().reveal('.buttonAppear', {
            origin: 'left',
            distance: '200%',
            duration: 2000,
            delay: 300,
            interval: 300,
            reset: false,
            mobile: true
        })
  }, [])
  
  return (
    <div className={`rounded-full bg-gray-500 text-center mt-10 p-3 w-fit min-w-full text-shadow hover:bg-gray-800 cursor-pointer hover:shadow-black-500/50 shadow text-lg ${props.appearClass}`}>
        <a href={`#${props.id}`}>{props.title}</a>
    </div>
  );
}

export default ButtonMenu;