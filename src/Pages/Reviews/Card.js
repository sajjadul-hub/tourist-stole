import React, { useEffect, useState } from 'react';
import { FaRegWindowClose, FaStar } from "react-icons/fa";
const Card = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, price, service, message, ratting } = order;
    const [orderService, setOrderService] = useState({});
    console.log(price);
    useEffect(() => {
        fetch(`https://traveller-server-talimul212.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])
    return (
        <div>
            <div className="card lg:card-side mb-5 bg-base-100 shadow-xl flex justify-between">
                <div className="avatar flex items-center ml-5">
                    <div className="w-24 h-24 rounded-full">
                        {
                            orderService?.img &&
                            <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
                <div className="card-body">
                    <h2 className="card-title">{serviceName}</h2>
                    <p>{message}</p>
                    <div className='flex'>
                        <b className='mr-2'>Ratting:</b>  {ratting}<FaStar className=' text-yellow-400 mt-1 ml-1'></FaStar> 
                    </div>
                    <button
                        onClick={() => handleStatusUpdate(_id)}
                        className=" bg-sky-400 px-3  py-1 text-white font-semibold rounded-lg w-44">Edit Comment</button>
                </div>
                <div className="card-actions justify-end">
                    <FaRegWindowClose onClick={() => handleDelete(_id)}></FaRegWindowClose>
                </div>
            </div>

        </div>

    );
};

export default Card;