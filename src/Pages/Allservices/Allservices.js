import React, { useEffect, useState } from 'react';
import ServicesCard from '../Home/Services/ServicesCard';
import ItemCard from './ItemCard';

const Allservices = () => {
    const[services,setServices]=useState([]);
    
    
    useEffect(()=>{
        fetch('http://localhost:5000/allservices')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);
    return (
        <div>
             {
            services.map(service=><ItemCard key={service._id} service={service}></ItemCard>)
         }
        </div>
    );
};

export default Allservices;