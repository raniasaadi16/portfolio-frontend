import { Icon } from "@iconify/react"
import ReactStars from 'react-stars'

export default function Text({review}) {
    return (
        <div className='flex items-center'>
            <div>
                <h3 className='text-pink-dark font-semibold text-2xl md:text-3xl'>{review.clientName}</h3>
                <div className='text-lg md:text-xl mt-3 mb-2 md:mb-3 md:mt-2'>
                    <Icon icon={review.country.countryFlag} className='inline-block'/>
                    <p className='text-gray-400 inline-block ml-3'>{review.country.countryName}</p>
                </div>
                <p className='lg:text-lg'>
                    {review.content}
                </p>
                <div className='md:absolute bottom-0'>
                    <ReactStars
                    value={review.rating}
                    size={24}
                    edit={false}
                    color2={'#ffd700'} />
                </div>
            </div>
        </div>
    )
}
