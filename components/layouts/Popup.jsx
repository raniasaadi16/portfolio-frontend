import { useEffect, useState } from "react"
import ReactDOM from "react-dom"

export default function Popup({isOpen, onClose, children}) {
    const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])
   console.log(isOpen)
   return (mounted && isOpen) ? ReactDOM.createPortal((
        <div className='fixed top-0 left-0 w-full h-full bg-black bg-opacity-30 pb-24 overflow-auto z-20'>
            <button className='relative float-right text-xl text-white pt-5 pr-5 pb-5' onClick={onClose}>X</button>
            <div className='py-40 px-4'>
                {children}
            </div>
        </div>
    ), document.getElementById('popup')) : null
}
