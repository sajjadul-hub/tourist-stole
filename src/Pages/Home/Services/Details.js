import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';
const rating = {
  rating: "4.5"
}

const Details = () => {
    const { _id,img,price,title,description}=useLoaderData();
    UseTitle('Details')
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-8">
      <figure><img className='w-full h-80' src={img} alt="Shoes" /></figure>
      <div className="card-body">
        <div className='flex justify-between'>
          <h2 className="card-title text-4xl">{title}</h2>
          <div className=' flex gap-2'>
            <FaStar className=' text-yellow-400 mt-1'></FaStar> <span className=' text-base mb-2'>{rating.rating}</span>
          </div>
        </div>
        <p className=' text-slate-600 mb-8 text-2xl font-semibold'>Description:<br /> <span className='text-xl'>{description}</span></p>
        <div className="card-actions justify-between">
          <h2 className='text-2xl text-sky-400 font-semibold'>Price: ${price}</h2>
          <div>
            <Link to={`/review/${_id}`}><button className="btn mr-5 border-0 w-36  bg-sky-400">Review</button></Link>
            <Link to={`/checkout/${_id}`}>
              <button className="btn  border-0 w-36  bg-sky-400">Booking Now</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Details;