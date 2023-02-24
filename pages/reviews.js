import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Text from '../components/reviews/Text';
import Picture from '../components/reviews/Picture';
import { Icon } from '@iconify/react';
import HireMe from '../components/layouts/HireMe';
import axios from 'axios';

export default function reviews({reviews}) {
    const responsiveTeam = {
        Allscreens: {
          breakpoint: { max: 4000, min: 0 },
          items: 1
        }
    };
    const CustomRightArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return (
        <button onClick={() => onClick()} className='absolute bottom-0 text-pink-dark text-2xl right-0 md:right-1/2 ' ><Icon icon="bi:arrow-right" /></button>
        );
    };
    const CustomLefttArrow = ({ onClick, ...rest }) => {
        const {
          onMove,
          carouselState: { currentSlide, deviceType }
        } = rest;
        // onMove means if dragging or swiping in progress.
        return (
        <button onClick={() => onClick()} className='absolute bottom-0 text-pink-dark text-2xl right-7 md:right-2/3' ><Icon icon="bi:arrow-left" /></button>
        );
    };
    return (
        <div>
            <div className='relative h-full bg-white  rounded-lg pb-36'>
                <div className='relative bg-main-color h-[100px] md:h-[160px] flex justify-center items-center'>
                    <div className='flex flex-col'>
                        <h2 className='font-mono text-white text-2xl md:text-3xl'>Some of my client's reviews</h2>
                    </div>
                </div>
                <div className='mt-8 md:mt-28 px-7 md:px-28'>
                    <Carousel responsive={responsiveTeam} customRightArrow={<CustomRightArrow/>} customLeftArrow={<CustomLefttArrow/>}>
                        {reviews.map(review => (
                            <div className='grid md:grid-cols-2 gap-x-20' key={review._id}>
                                <Text review={review}/>
                                <Picture pic={review.picture}/>
                            </div>
                        ))}
                    </Carousel>
                    <div className='mt-12 md:mt-32'>
                        <HireMe/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticProps(){
    const reviews = await axios.get(`${process.env.NEXT_PUBLIC_PROXY}/reviews`)

    return{
        props:{
            reviews: reviews.data.data.reviews
        },
        revalidate: 1800
    }
}