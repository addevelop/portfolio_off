import React from 'react'
import ButtonMenu from '@/components/buttons/buttonMenu'
function buttonContainer(props: any) {
  return (
    <div className="flex max-sm:flex-col w-fit m-auto">
        <ButtonMenu id="moi" title="Moi" appearClass={props.appearClass}/>
        <ButtonMenu id="competences" title="Compétences" appearClass={props.appearClass}/>
        <ButtonMenu id="experiences" title="Expériences" appearClass={props.appearClass}/>
        <ButtonMenu id="contact" title="Contact" appearClass={props.appearClass}/>
    </div>
  )
}

export default buttonContainer