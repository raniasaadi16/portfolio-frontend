import axios from 'axios';
import Link from 'next/link'
import { useEffect, useState } from 'react';
import Filter from '../../components/portfolio/Filter'
import Grid from '../../components/portfolio/Grid'

export default function portfolio({projects}) {
    const [tag, settag] = useState('All');
    const [filter, setfilter] = useState([])
    useEffect(() => {
        if( tag === 'All'){
            setfilter(projects)
        }else{
            setfilter(projects.filter(project => project.category === tag));
        }
    }, [tag]);
    return (
        <div>
            <div className='relative h-full bg-white  rounded-lg pb-32'>
                <div className='relative bg-main-color h-[100px] md:h-[160px] flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <h2 className='font-mono text-white text-2xl md:text-3xl'>My Portfolio</h2>
                        <button className='px-3 py-1 bg-pink-light text-white rounded-lg mt-1 mx-auto hover:scale-105 transition duration-75 ease-out md:mt-5'>
                            <Link href='/'>Hire Me</Link>
                        </button>
                    </div>
                </div>
                <Filter tag={tag} settag={settag} />
                <Grid projects={filter} />
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const projects = await axios.get(`${process.env.PROXY}/projects`)

    return{
        props:{
            projects: projects.data.data.projects,
        }
    }
}