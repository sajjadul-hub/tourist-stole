import React from 'react';
import bannerImg from '../../../assets/images/banner/1.jpg'
import guider from '../../../assets/images/about_us/guider.jpg';
const Banner = () => {
    return (
        <div className='text-center'>
            <div className="card image-full w-auto">
                <figure><img className='w-full' src={bannerImg} alt="" /></figure>
                <div className="card-body flex justify-center items-center">
                    <h2 className=' text-2xl lg:text-5xl font-bold text-blue-200 '> Find Your Next Adventure <br />
                        With Traveller</h2>
                </div>
            </div>
            <div className=' flex justify-center mb-2 mt-28'>
                <img className='h-40 w-40 rounded-full' src={guider} alt=''></img>
            </div>
            <span className='font-bold text-3xl'>Hi! It's Sajjadul islam</span>
            <p className=' text-2xl text-center'>
                <br />
                I am travel nuts and love visiting new places. I am used my experience to help you find your next adventure. I'll  show you where to go, when to visit, where to stay, and what to pack.</p>
        </div>
    );
};

export default Banner;