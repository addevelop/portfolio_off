import React from 'react'
import "@/styles/experience.css";
import Image from 'next/image';
interface IExperience
{
    title: string;
    img: Array<string>;
    description: string;
    colorTitle: string;
}
function Experience(props: IExperience) {
  return (
    <div>
      <fieldset className="caroucel-custom bg-gray-600 box-shadow-1 text-white w-10/12 rounded-md hover:shadow-xl p-3 text-black m-auto">
         <legend className={`block ${props.colorTitle} box-shadow w-fit p-2 m-auto rounded-md font-bold text-2xl`}>
            {props.title}
         </legend>
            <div className="grid grid-cols-4 w-full gap-4 p-3">
              {props.img.map((value, index) => (
                <div key={index} className="h-full w-full bg-gray-700 p-3 rounded-full flex align-center justify-center">
                  <Image className="h-auto w-full m-auto" width={100} height={100} alt={value} src={value} />
                </div>
              ))}
            </div>
            <div className="text-start">
              <p className="text-xl font-bold">Description</p>
              <p dangerouslySetInnerHTML={{ __html: props.description}}>
              </p>
            </div>
         </fieldset>
    </div>
    
  )
}

export default Experience