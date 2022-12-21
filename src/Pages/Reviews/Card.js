import React, { useEffect, useState } from 'react';
import { FaRegWindowClose, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Card = ({ order, handleDelete, handleStatusUpdate }) => {
    const { _id, serviceName, price, service, message, ratting } = order;
    const [orderService, setOrderService] = useState({});
    useEffect(() => {
        fetch(`https://traveller-server-talimul212.vercel.app/services/${service}`)
            .then(res => res.json())
            .then(data => setOrderService(data));
    }, [service])
    return (
        <div>
            <div className="card lg:card-side mb-5 bg-base-100 shadow-xl flex justify-between">
                <div className="avatar items-center ml-5 hidden lg:flex">
                    <div className="w-24 h-24 rounded-full ">
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
                    <Link to={`/update/${_id}`}
                        onClick={() => handleStatusUpdate(_id)}
                        className=" bg-sky-400 px-3  py-1 text-white font-semibold rounded-lg lg:w-44  text-center">Edit Comment</Link>
                </div>
                <div className="card-actions justify-end">
                    <FaRegWindowClose onClick={() => handleDelete(_id)}></FaRegWindowClose>
                </div>
            </div>

        </div>

    );
};

export default Card;