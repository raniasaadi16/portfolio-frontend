import Gallery from './Gallery';
import Description from './Description';
import useSWR from 'swr';
import axios from 'axios';

export default function Project({projectId}) {
     const { data, error } = useSWR(`/api`, async () => {
        const res = await (await axios.get(`https://rania-portfolio.herokuapp.com/api/projects/${projectId}`));
        return res.data.data.project
     });
    
    if(error) return <p>failed to load</p>
    if(!data) return <p>Loading...</p>
    return (
        <div className='flex flex-wrap w-full flex-col-reverse md:flex-row md:space-x-5'>
            <div className='bg-white py-5 px-2 md:w-8/12 w-full rounded-sm'>
                <Gallery pictures={data.gallery} alt={data.projectName}/>
            </div>
            <div className='py-3 px-4 rounded-sm mb-5 md:mb-0 border-t-8 border-pink-light md:w-[30%] md:h-[max-content]' style={{background: '#f9f9f9'}}>
                <Description project={data}/>
            </div>
        </div>
    )
}
