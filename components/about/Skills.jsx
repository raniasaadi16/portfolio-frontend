import { Icon } from '@iconify/react';

export default function Skills({skills}) {
    return (
        <div className='px-7 md:px-16 mt-5 md:mt-12'>
            <h2 className='font-mono text-2xl md:text-3xl'>My Skills</h2>
            <div className='mt-5 md:mt-7'>
                <div className='space-y-5'>
                    {skills.map(skill => (
                        <div key={skill._id}>
                            <h3 className='text-pink-dark text-lg font-semibold'>
                                {skill.skillName}
                            </h3>
                            <div className='flex flex-wrap'>
                                {skill.options.map(op => (
                                     <div className="mt-3 md:mt-7 mr-7 md:mr-24" key={op._id}>
                                        <Icon icon={op.optionIcon} className='w-[50px] h-[50px] md:w-[70px] md:h-[70px]'/>
                                        <p className='text-sm mt-1 font-semibold text-center'>{op.optionName}</p>
                                    </div>
                                ))}            
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>
    )
}
