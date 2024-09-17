import React from 'react'

interface IItems
{
    icon: any;
    title: string;
}

function Items(props: IItems) {
  return (
    <div className="flex items-center mt-3">
    {props.icon}&nbsp;{props.title}
    </div>
  )
}

export default Items