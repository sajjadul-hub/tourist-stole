import React from 'react';
import { Link } from 'react-router-dom';

const ServicesCard = ({service}) => {
    const { _id,img,price,title}=service;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
    <div className="card-actions justify-end">
      <Link to={`/checkout/${_id}`}>
      <button  style={{backgroundColor:" #FF3811"}} className="btn border-0">Check Out</button>
      </Link>
     
    </div>
  </div>
</div>
    );
};

export default ServicesCard;