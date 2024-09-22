import React from 'react'
import ButtonMenu from '@/components/buttons/buttonMenu'
function buttonContainer(props: any) {
  return (
    <div className="max-sm:w-fit w-3/4 m-auto grid grid-cols-4 max-sm:grid-cols-1 grox-1 gap-8 max-sm:gap-3">
        <ButtonMenu id="moi" title="Moi" appearClass={props.appearClass}/>
        <ButtonMenu id="competences" title="Compétences" appearClass={props.appearClass}/>
        <ButtonMenu id="experiences" title="Expériences" appearClass={props.appearClass}/>
        <ButtonMenu id="contact" title="Contact" appearClass={props.appearClass}/>
    </div>
  )
}

export default buttonContainer