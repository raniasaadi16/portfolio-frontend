import Image from 'next/image';

export default function Gallery({pictures, alt}) {
    return (
        <div className='space-y-5'>
            {pictures.map((pic, index) => (
                <div className='relative w-full' key={index}>
                    {
                        pic && <Image src={pic} alt={alt} width='100%' height='100%' layout='responsive' objectFit='contain' />
                    }
                </div>
            ))}
        </div>
    )
}
