import React from 'react'

function Navbar() {
  return (
    <div className="fixed flex w-full bg-grey-600 head p-2 hidden">
        <div className="flex-1">
            <img src="/pro.png" className="rounded-full h-full"/>
        </div>
        <div className="flex-1 text-end">
            Contact
        </div>
    </div>
  )
}

export default Navbar