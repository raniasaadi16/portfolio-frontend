import { Icon } from "@iconify/react"
import Link from "next/link"

export default function Description({project}) {
    return (
        <div className='space-y-4'>
            <div>
                <h3 className='text-lg font-semibold text-pink-light'>{project.projectName}</h3>
                <div dangerouslySetInnerHTML={{__html: `${project.description}`}}></div>
            </div>
            <div>
                <h3 className='text-lg font-semibold text-pink-light'>Tools and technologies</h3>
                <div className='flex flex-wrap'>
                    {project.tools.map((tool) => (             
                        <div key={tool._id} className="mt-3 md:mt-7 mr-7">
                            <img src={tool.toolIcon} className='md:w-[50px] md:h-[50px] w-[40px] h-[40px]'/>
                            <p className='text-sm mt-1 text-center'>{tool.toolName}</p>
                        </div>              
                    ))}
                </div>
            </div>
            <div className='space-y-2'>
                {/* {project.url && (
                    <button className='px-3 py-1 bg-pink-light text-pink-dark rounded-lg hover:scale-105 transition duration-75 ease-out block'>
                        <Link href={project.url}>
                            <a target="_blank">
                                Preview <Icon icon="akar-icons:link-out" className='inline-block ml-2' />
                            </a>    
                        </Link>
                    </button>
                )} */}
                {project.sourceCode?.length > 0 && (
                    <>
                        <h3 className='text-lg font-semibold text-pink-light'>Source Code</h3>
                        {project.sourceCode.map((code, index) => (
                            <div key={index}>
                                <p className='inline-block mr-4'>{code.name}: </p>
                                <button className='px-3 py-1 bg-gray-900 text-white rounded-lg hover:scale-105 transition duration-75 ease-out inline-block'>
                                    <Link href={code.url}>
                                        <a target="_blank">
                                            github <Icon icon="akar-icons:github-fill" className='inline-block ml-2'/>
                                        </a>    
                                    </Link>
                                </button>
                            </div>
                        ) )}
                    
                    </>
                )
                }
            </div>
            
        </div>
    )
}
