import { Fragment } from "react"
import Image from 'next/image'
import Link from 'next/link'

export default function AboutMe() {
     const handleDownload = () => {
    const link = document.createElement('a');
    link.href = 'https://firebasestorage.googleapis.com/v0/b/portfolio-4803a.firebasestorage.app/o/software-engineer-cv-rs.pdf?alt=media&token=9aaeac2a-b339-4c99-be4f-2e1f57a29ff6'; // Replace with your file URL
    link.download = 'software-engineer-cv-rs.pdf'; // Specify the file name
    link.click();
  };
    return (
        <Fragment>
            <div className='relative bg-main-color h-[84px] md:h-[160px]'></div>
         
                  <div className='relative px-7 md:px-16 -mt-16 md:-mt-24 lg:mt-0 lg:px-0'>
                    <div className='lg:absolute relative max-w-full mx-auto lg:left-12 lg:-top-24 w-full lg:w-[430px] h-52 md:h-[320px] border-18 border-white'>
                        <Image src='/img/about.jpg' layout='fill' objectFit='cover'/>
                    </div>
                    <div className="lg:flex">
                        <div className="lg:w-[500px]"></div>
                        <div className='lg:px-0 lg:ml-5 flex-1 lg:-mt-14 '>
                            <h2 className='font-mono text-2xl lg:text-white md:text-3xl'>About Me</h2>
                            <p className='lg:mt-14 mt-4 mb-4 md:text-lg lg:w-[90%]'>
                                I am a passionate full-stack developer with a focus on building scalable and user-friendly web and desktop applications. With expertise in platform conception, development, and deployment, I strive to create innovative solutions that meet both technical and user needs. I am experienced in modern development practices, including CI/CD, and thrive in collaborative environments where I can contribute to the success of projects. Constantly seeking to learn and improve, I am committed to delivering high-quality, efficient solutions that drive business growth and enhance user experience.                   </p>
                                <div className="flex space-x-3 ">
                                    <Link href='/portfolio'>
                                        <button className='bg-pink-light rounded-lg px-3 py-2 hover:scale-105 transition duration-100 ease-out text-white'>
                                            Check Portfolio
                                        </button>
                                    </Link> 
                                    <button className='bg-main-color rounded-lg px-3 py-2 hover:scale-105 transition duration-100 ease-out text-pink-dark' onClick={handleDownload}>
                                            Download CV
                                        </button> 

                                </div>

                        </div>
                    </div>
                </div>
        </Fragment>
    )
}
