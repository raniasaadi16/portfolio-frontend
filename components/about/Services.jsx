// import { CheckIcon } from '@heroicons/react/solid';

export default function Services({services}) {
    return (
        <div className='px-7 md:px-16 mt-5 md:mt-9'>
            <h2 className='font-mono text-2xl md:text-3xl'>My Services</h2>
            <div className="mt-5 md:mt-9 grid md:grid-cols-2 gap-2 md:gap-10">
                {services.map(service => (
                    <div className="bg-pink-light px-4 py-4 rounded-lg lg:px-12" key={service._id}>
                        <h4 className='text-pink-dark text-lg text-center font-semibold'>{service.serviceName}</h4>
                        <ul className='mt-5 text-white space-y-1'>
                            {service.options.map((op,index) => (
                                <li key={index}>
                                    {/* <CheckIcon className='h-5 inline-block text-pink-dark mr-2'/> */}
                                    {op}
                                </li>
                            ))}
                        </ul>
                        <button className='px-3 py-1 bg-main-color text-pink-dark rounded-lg mt-4 hover:scale-105 transition duration-75 ease-out md:mt-5'>
                            <a href='https://www.fiverr.com/raniasa' target='_blank'>Hire Me</a>
                        </button>
                    </div>
                ))}

            </div>
        </div>
    )
}
