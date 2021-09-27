import React from 'react'
import { useRouter } from 'next/router'
import Project from '../../../components/portfolio/Project'

export default function ProjectPage() {
    const router = useRouter();
    const { id } = router.query
    
    if(!id) return <p>Loading...</p>
    return (
        <div className='relative h-full bg-gray-400 rounded-b-lg'>
            <div className='px-5 py-10'>
                <Project projectId={id}/>
            </div>
        </div>
    )
}
