import Link from 'next/link';

export default function HireMe() {
    return (
        <div className='bg-gradient-to-r from-pink-light to-pink-dark py-3 px-7 md:py-9 md:px-28 rounded-lg'>
            <p className='text-xl md:text-2xl text-center text-white font-mono'>
                I will give your business a new creative start right away! 
                contact me now
            </p>
            <Link href='/contact'>
                <button className='px-4 py-2 bg-main-color text-white mx-auto font-mono rounded-lg block mt-4 md:mt-7 md:text-xl'>
                    Contact Me
                </button>
            </Link>
        </div>
    )
}
