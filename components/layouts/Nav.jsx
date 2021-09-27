import Image from 'next/image';
import { Icon } from '@iconify/react';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';

export default function Nav({isAbsolute}) {
    const [open, setopen] = useState(false);

    return (
        <nav className={`${!isAbsolute && 'bg-white'} rounded-t-lg py-2 px-5 flex justify-between items-center ${isAbsolute ? 'absolute right-0 left-0 px-12' : 'relative'} z-10 w-full`}>
            <div className='relative w-12 h-8 md:w-14'>
                <Link href='/'>
                    <a>
                        <Image src='/img/logo.svg' layout='fill'/>
                    </a>
                </Link>
            </div>
            <Icon icon="gg:menu-right-alt" className='text-pink-light text-xl cursor-pointer md:text-2xl' onClick={() => setopen(true)}/>
            <Menu open={open} onClose={() => setopen(false)}/>
        </nav>
    )
}