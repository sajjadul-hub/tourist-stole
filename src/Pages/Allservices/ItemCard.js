import React from 'react';
import { Link } from 'react-router-dom';
const ItemCard = ({ service }) => {
  const { _id, img, price, title, description } = service;
  return (
    <div className="card card-compact bg-base-100 shadow-xl mb-8 mx-3">
  <figure>
    <img className=' h-52 w-96' src={img} alt="Shoes" />
    </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
    <p className=' text-slate-600 mb-8'>Description: {description.slice(0, 100) + '...'}</p>
      <Link to={`/details/${_id}`}>
      <button  className="btn  border-0 w-full  bg-sky-400">More Details</button>
      </Link>
  </div>
</div>
  );
};

export default ItemCard;