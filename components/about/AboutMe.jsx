import { Fragment } from "react"
import Image from 'next/image'
import Link from 'next/link'

export default function AboutMe() {
    return (
        <Fragment>
            <div className='relative bg-main-color h-[84px] md:h-[160px]'></div>
            <div className='lg:flex lg:items-center px-3 md:px-12 relative -mt-7 md:-mt-24'>
                    <div className='relative w-full h-52 md:h-[320px] border-18 border-white'>
                        <Image src='/img/home-img.webp' layout='fill' objectFit='cover'/>
                    </div>
                    <div className='px-5 lg:px-0 lg:ml-5'>
                        <h2 className='font-mono text-2xl lg:text-white md:text-3xl'>About Me</h2>
                        <p className='lg:mt-12 mt-4 mb-4 md:text-lg'>
                            A full stack developer who enjoy learning everything about development, knowledgeable in user interfaces and experiences , front end and back end development, equipped with diverse and promising skills. Able to effectively self-manage during independent projects, as well as collaborate in a team setting.                        </p>
                        <button className='bg-pink-light rounded-lg px-3 py-2 hover:scale-105 transition duration-100 ease-out text-white'>
                            <Link href='/portfolio'>
                                Check Portfolio
                            </Link>
                        </button>
                    </div>
                </div>

        </Fragment>
    )
}
