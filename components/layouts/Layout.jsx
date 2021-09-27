import { Fragment } from "react";
import Nav from "./Nav";
import Image from 'next/image';
import { useRouter } from 'next/router'

export default function Layout({children}) {
    const router = useRouter()
    const path = router.pathname


    return (
        <div className='relative'>
            <div className='absolute top-0 left-0 h-[110px] sm:w-[600px] w-full' >
                <Image src='/img/top-img.webp' layout='fill' objectFit='cover'/>
            </div>
            <main className={path === '/' ? 'relative h-screen px-8 py-6 rounded-lg' : 'relative h-full px-8 py-6'}>
                <Nav isAbsolute={path === '/'}/>
                {children}
            </main>
            <div className='absolute bottom-0 right-0 h-[186px] w-[225px]' >
                <Image src='/img/bottom-img.webp' layout='fill' />
            </div>
        </div>
    )
}
