import { useEffect, useState } from "react"
import ReactDOM from "react-dom"
import Link from "next/link";

export default function Menu({open, onClose}) {
    const [mounted, setMounted] = useState(false)

   useEffect(() => {
      setMounted(true)

      return () => setMounted(false)
   }, [])
    // console.log(open)
    return (mounted && open) ? ReactDOM.createPortal((
        <div className='fixed top-0 left-0 w-full h-full bg-pink-light overflow-auto z-20'>
            <button className='relative float-right text-2xl text-white pt-5 pr-7 pb-5' onClick={onClose}>X</button>
            <div className='flex justify-center items-center h-screen'>
                <ul className='text-white text-center text-3xl space-y-7'>
                    <li className='hover:scale-125 hover:text-pink-dark transition duration-150 ease-out' onClick={onClose}>
                        <Link href='/'>HOME</Link>
                    </li>
                    <li className='hover:scale-125 hover:text-pink-dark transition duration-150 ease-out' onClick={onClose}>
                        <Link href='/about'>ABOUT</Link>
                    </li><li className='hover:scale-125 hover:text-pink-dark transition duration-150 ease-out' onClick={onClose}>
                        <Link href='/portfolio'>PORTFOLIO</Link>
                    </li><li className='hover:scale-125 hover:text-pink-dark transition duration-150 ease-out' onClick={onClose}>
                        <Link href='/reviews'>REVIEWS</Link>
                    </li><li className='hover:scale-125 hover:text-pink-dark transition duration-150 ease-out' onClick={onClose}>
                        <Link href='/contact'>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    ), document.getElementById('menu')) : null
}
