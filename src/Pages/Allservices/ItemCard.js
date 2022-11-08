import React from 'react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const rating={
    rating:"4.5"
}
const ItemCard = ({service}) => {
        const { _id,img,price,title,description}=service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-8">
  <figure><img className='w-full h-80' src={img} alt="Shoes" /></figure>
  <div className="card-body">
   <div className='flex justify-between'>
   <h2 className="card-title text-4xl">{title}</h2>
    <span className=' text-base'><FaStar></FaStar>{rating.rating}</span>
   </div>
    <p className=' text-slate-600 mb-8 text-2xl font-semibold'>Description:<br/> <span className='text-xl'>{description}</span></p>
    <div className="card-actions justify-between">
        <h2 className='text-2xl text-sky-400 font-semibold'>Price: ${price}</h2>
        <Link to={`/checkout/${_id}`}>
      <button  className="btn  border-0 w-72  bg-sky-400">Booking Now</button>
      </Link>
    </div>
  </div>
</div>
    );
};

export default ItemCard;