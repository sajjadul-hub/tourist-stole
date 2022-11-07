import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const[services,setServices]=useState([]);
    
    
    useEffect(()=>{
        fetch('https://genius-car-server-silk.vercel.app/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);



    return (
       <div>
         <div className='text-center mb-6'>
            <p className='text-2xl font-bold text-orange-600 '>Travelling Services</p>
        <h2 className='text-5xl font-semibold my-5'>My Service Area</h2>
        <p className='text-gray-600'>Tour and travel guides, also known as tour directors or step-on tour guides, escort people on trips or give tours of locations of interest. <br/>People in this occupation: may travel with tourists to their destination. may work at a place of interest, such as a city, historical site or theme park. </p>
        </div>
        <div className='grid gap-8 grid-col-1 md:grid-cols-2 lg:grid-cols-3 '>
         {
            services.map(service=><ServicesCard key={service._id} service={service}></ServicesCard>)
         }
        </div>
       </div>
    );
};

export default Services;