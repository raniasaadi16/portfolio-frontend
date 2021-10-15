
export default function Header() {
    return (
        <div>
            <div className='relative h-[150px] md:h-[270px] flex justify-center items-center bg-cover bg-center  after:absolute after:pseudo-content-comma  after:w-full after:h-full after:bg-black after:opacity-30' style={{backgroundImage: "url('/img/contact.jpg')"}}>
                    <div className='flex flex-col z-20 relative'>
                        <h2 className='font-mono text-white text-2xl md:text-3xl'>Contact Me</h2>
                    </div>
            </div>
            <div className='bg-main-color w-5/6 md:w-3/5 py-3 -mt-8 z-20 relative text-pink-dark mx-auto rounded-lg flex justify-center items-center font-mono md:space-x-16'>
                <p className='text-lg md:text-2xl'>You can hire me here</p>
                <button className='bg-pink-dark text-white mx-3 px-2 md:px-5 py-1 rounded-lg md:text-lg hover:scale-110 transition duration-100 ease-out'>
                    <a href="https://www.fiverr.com/raniasa" target='_blank'>Hire Me</a>
                </button>
            </div>
        </div>
    )
}
