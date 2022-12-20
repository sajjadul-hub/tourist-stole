import React from 'react';
import { FaStar } from 'react-icons/fa';

const ServiceReview = ({ review }) => {
    const { message, ratting, email } = review;
    return (
        <div>
            <div className="card  mb-5 bg-base-100 shadow-xl">
                <div className="p-5 lg:flex justify-between ">
                    <div>
                        <p><b>Review by:</b> {email}</p>
                        <p><b>Comment:</b> {message}</p>
                    </div>
                    <div className='flex'>
                        <b className='mr-2'>Ratting:</b>  {ratting}<FaStar className=' text-yellow-400 mt-1 ml-1'></FaStar>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default ServiceReview;