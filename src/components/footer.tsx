import React from "react";
import Network from "./network/network";
function Footer()
{
    return(
        <footer className="w-full bg-gray-800 p-4 relative z-1">
            <section className="w-full text-center text-white">
                <h2 className='text-3xl'>Réseaux sociaux</h2>
                <div className='grid grid-cols-3 gap-7 max-sm:w-3/6 w-2/6 m-auto mt-3 mb-3'>
                    <Network img={'/networks/github.png'} title={'Github'} link={'https://github.com/addevelop'}/>
                    <Network img={'/networks/linkdin.png'} title={'Linkedin'} link={'https://www.linkedin.com/in/adrien-rodrigues-8756831a1'}/>
                    <Network img={'/networks/email.png'} title={'Email'} link={'mailto:adrienpro.rodrigues@gmail.com'}/>

                </div>
            </section>
            <h2 className="text-white text-center">
                <i>by</i> Adrien RODRIGUES
            </h2>
        </footer>
    )
}

export default Footer