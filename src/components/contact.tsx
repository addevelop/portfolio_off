import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from '@formspree/react';
import Loading from "./loading/loading";

function Contact(){
    const [state, handleSubmit] = useForm("xkgwlprw");
    const [isSended, setIsSended] = useState(false);
    const [isLoadingSended, setIsLoadingSended] = useState(true);
    useEffect(() => {
        if (state.succeeded) {
            setIsLoadingSended(false);
            setIsSended(true);
        }
    }, [state.succeeded])
    
    return(
        <div id="contact" className="page flex justify-center items-center min-h-screen text-white box-shadow" style={{ background: "linear-gradient(to right, rgba(31, 41, 55, 0.8), rgba(17, 24, 39, 0.8))" }}>
  <form onSubmit={handleSubmit} className="w-full max-w-lg bg-gray-700 p-8 rounded-lg shadow-lg">

    {isSended ? (
        <div className="text-center p-3 text-xl">
            {isLoadingSended ? (
                  <div className="w-32 h-32 m-auto">
                    <Loading />
                  </div>
            ) : (
                <p>Message envoyé !</p>
            )}
        </div>
    ) : (
        <>
            <div>
        <h2 className="text-xl">Me contacter</h2>
        <hr />
    </div>
        <div className="mb-6 mt-6">
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
        Votre adresse email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="abc@def.com"
        className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </div>

    <div className="mb-6">
      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
        Votre message
      </label>
      <textarea
        id="message"
        name="message"
        className="w-full px-4 py-2 bg-gray-100 text-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[120px]"
        placeholder="Votre texte ici !"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </div>

    <button
      type="submit"
      className="w-full bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded-full transition duration-200 ease-in-out"
      disabled={state.submitting}
    >
      Submit
    </button>
    </>
    )}
    
  </form>

        </div>
    )
}

export default Contact