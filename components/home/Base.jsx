import Image from 'next/image';
import Text from './Text';

export default function Base() {
    return (
            <div className='relative h-full'>
                <div className='relative w-full h-full  after:absolute after:pseudo-content-comma  after:w-full after:h-full after:bg-black after:opacity-30 after:rounded-lg '>
                    <Image className='rounded-lg' src='/img/home-img.webp' layout='fill' objectFit='cover' />
                </div>
                <Text/>
            </div>
    )
}
