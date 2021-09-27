import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Text() {
    return (
        <div>
            <p className='text-2xl md:text-5xl text-black font-mono'>Let's Chat</p>
            <p className='my-5 md:text-lg'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus 
            </p>
            <div className='grid grid-cols-2'>
                <div className='space-y-3'>
                    <div className='md:text-lg'>
                        <Link href='/'>
                            <a>
                                <Icon icon="dashicons:email" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                Email
                            </a>
                        </Link>
                    </div>
                    <div>
                        <Link href='/'>
                            <a>
                                <Icon icon="akar-icons:facebook-fill"  className='inline-block mr-3 text-pink-dark md:text-lg' />
                                Facebook
                            </a>
                        </Link>
                        
                    </div>
                    <div>
                        <Link href='/'>
                            <a>
                                <Icon icon="ant-design:instagram-filled" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                Instagram
                            </a>
                        </Link>
                        
                    </div>
                    <div>
                        <Link href='/'>
                            <a>
                                <Icon icon="ant-design:behance-circle-filled" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                Behance
                            </a>
                        </Link>
                        
                    </div>
                </div>
                <div className='space-y-3'>
                    <div>
                        <Link href='/'>
                            <a>
                                <Icon icon="akar-icons:github-fill" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                Github
                            </a>
                        </Link>
                        
                    </div>
                    <div>
                        <Link href='/'>
                            <a>
                                <Icon icon="simple-icons:fiverr" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                Fiverr
                            </a>
                        </Link>
                        
                    </div>
                    <div>
                        <Link href='/'>
                            <a>
                                <Icon icon="simple-icons:freelancer" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                Freelancer.com
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
