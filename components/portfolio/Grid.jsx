import Masonry from 'react-masonry-css';
import Image from 'next/image';
import Link from 'next/link';
import Modal from './Modal';
import { useRouter } from 'next/router';
import Project from './Project';

export default function Grid({projects}) {

    const router = useRouter();
    const responsiveGallery = {
        default: 3,
        600: 1,
        960: 2
    }

    return (
        <div className='mt-5 md:mt-12 px-7 md:px-24'>
           <Masonry
            breakpointCols={responsiveGallery}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
                {projects.map((project,index) => (
                    <div key={index} className='relative cursor-pointer'>
                        <div className='relative w-full h-44 block'>
                            <Link href={`/portfolio/?projectId=${project._id}`} as={`/portfolio/projects/${project._id}`}>
                                <a>
                                    <Image src={project.picture} alt={project.projectName} layout='fill' objectFit='contain' className='rounded-md'/>
                                </a>
                            </Link>
                        </div>
                        {/* <div className='group-hover:flex'>
                            <div className='hidden flex-col justify-center items-center  w-full h-96 bg-main-color '>
                                <h3>{project.title}</h3>
                                <button>See Details</button>
                            </div>
                        </div> */}
                    </div>
                ))}
            </Masonry>
            <div>
                <Modal isOpen={!!router.query.projectId} onClose={() => router.push('/portfolio')}>
                    <Project projectId={router.query.projectId}/>
                </Modal>
            </div>
        </div>
    )
}
