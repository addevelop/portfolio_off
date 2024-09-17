import React from 'react'

interface ILanguage
{
    img: any;
    title: string;
}

function Language(props: ILanguage) {
  return (
    <div className="flex items-center justify-center rounded-full overflow-hidden bg-neutral-700 p-3 box-shadow max-[380px]:w-20 max-[380px]:h-20 w-24 h-24 m-auto">
    <img src={props.img} className='w-3/5' />
    </div>
  )
}

export default Language