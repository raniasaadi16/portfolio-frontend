import Image from 'next/image';
import { Icon } from '@iconify/react';

export default function Picture({pic}) {
    return (
        <div className='hidden md:block relative w-full h-80 border-8 border-pink-dark'>
            <Icon icon="bx:bxs-quote-alt-right" className='absolute z-10 top-0 right-0 text-6xl text-pink-light -mt-8'/>
            <Image src={pic} layout='fill' />
        </div>
    )
}
