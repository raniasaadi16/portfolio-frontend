import AboutMe from "../components/about/AboutMe";
import Services from "../components/about/Services";
import Skills from "../components/about/Skills";
import HireMe from "../components/layouts/HireMe";
import axios from "axios";

export default function about({services, skills}) {
    //console.log(skills)
    return (
        <div>
            <div className='relative h-full bg-white  rounded-lg pb-32'>
                <AboutMe/>
                <Services services={services}/>
                <Skills skills={skills}/>
                <div className='px-7 md:px-16 mt-12 md:mt-24'>
                    <HireMe/>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const services = await axios.get(`${process.env.PROXY}/services`)
    const skills = await axios.get(`${process.env.PROXY}/skills`)

    return{
        props:{
            skills: skills.data.data.skills,
            services: services.data.data.services
        },
        revalidate: 1800
    }
}