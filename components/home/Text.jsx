import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
export default function Text() {
    return (
        <div className='absolute top-1/2 -translate-y-1/2 text-white px-8 sm:px-16 grid md:grid-cols-2 w-full'>
            <div className='m-auto'>
                <h3 className='text-4xl font-mono'>Hello</h3>
                <h3 className='text-4xl font-bold mt-2 mb-7'>
                    My name is Rania and i am
                    <span className='text-pink-light'>
                        <Typewriter
                        options={{
                            strings: ['Full stack Developer','Ui Designer'],
                            autoStart: true,
                            loop: true,
                            deleteSpeed:20
                        }}
                        />
                    </span>
                </h3>             
                    <Link href='/about'>
                        <button className='bg-pink-light rounded-lg px-3 py-2 hover:scale-105 transition duration-100 ease-out'>
                            About me
                        </button>
                    </Link>
            </div>
            <div className='relative w-[300px] h-[300px] m-auto hidden md:block'>
                <Image src='/img/homeSvg.svg' layout='fill' />
            </div>
        </div>
    )
}
