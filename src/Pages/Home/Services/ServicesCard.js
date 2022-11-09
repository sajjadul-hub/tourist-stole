import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { Link } from 'react-router-dom';
import UseTitle from '../../../Hooks/UseTitle';
const ServicesCard = ({service}) => {
    const { _id,img,price,title,description}=service;
    const images=[
      {
        id:_id,
        imgSrc:img
      }
    ];
    UseTitle('All Services')
    return (
        <div className="card card-compact bg-base-100 shadow-xl mb-8">
  <figure>
  <PhotoProvider>
      <div className="foo">
        {images.map((item, index) => (
          <PhotoView key={index} src={item}>
            <img className=' h-52' src={item.imgSrc} alt="" />
          </PhotoView>
        ))}
      </div>
    </PhotoProvider>
    </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p className='text-2xl text-orange-600 font-semibold'>Price: ${price}</p>
    <p className=' text-slate-600 mb-8'>Description: {description.slice(0, 100) + '...'}</p>
    <div className="card-actions justify-end">
      <Link to={`/details/${_id}`}>
      <button  className="btn  border-0 w-72  bg-sky-400">More Details</button>
      </Link>
     
    </div>
  </div>
</div>
    );
};

export default ServicesCard;