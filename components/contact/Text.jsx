import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Text() {
    return (
        <div>
            <p className='text-2xl md:text-5xl text-black font-mono'>Let's Chat</p>
            <p className='my-5 md:text-lg'>
                Hey! i am looking forward to start a project with you , you can choose any communication tool or  kindly fill up this form .
            </p>
            <div className='grid grid-cols-2'>
                <div className='space-y-3'>
                    <div className='md:text-lg'>
                        <Link href='/contact'>
                            <a>
                                <Icon icon="dashicons:email" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                                rania@raniadev.tech
                            </a>
                        </Link>
                    </div>
                    <div>
                        <a href='https://www.facebook.com/profile.php?id=100012597033911' target='_blank'>
                            <Icon icon="akar-icons:facebook-fill"  className='inline-block mr-3 text-pink-dark md:text-lg' />
                            Facebook
                        </a>   
                    </div>
                    <div>
                        <a href='https://www.instagram.com/saa.rania/' target='_blank'>
                            <Icon icon="ant-design:instagram-filled" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                            Instagram
                        </a>                        
                    </div>
                    <div>
                        <a href='https://www.behance.net/raniasaadi1' target='_blank'>
                            <Icon icon="ant-design:behance-circle-filled" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                            Behance
                        </a>                        
                    </div>
                </div>
                <div className='space-y-3'>
                    <div>
                        <a href='https://github.com/raniasaadi16' target='_blank'>
                            <Icon icon="akar-icons:github-fill" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                            Github
                        </a>                        
                    </div>
                    <div>
                        <a href='https://www.fiverr.com/raniasa' target='_blank'>
                            <Icon icon="simple-icons:fiverr" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                            Fiverr
                        </a>                        
                    </div>
                    <div>
                        <a href='https://www.freelancer.com/u/saadirania33' target='_blank'>
                            <Icon icon="simple-icons:freelancer" className='inline-block mr-3 text-pink-dark md:text-lg'/>
                            Freelancer.com
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
