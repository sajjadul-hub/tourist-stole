import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const ReviewField = () => {
    const{_id,title,price}=useLoaderData();
    console.log(_id,title);
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;

        const order = {
            service: _id,
            email,
            serviceName: title,
            message
        }
        console.log(order);

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorication:`Bearer ${localStorage.getItem('genius')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review successfully add')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>
           <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl font-semibold text-cyan-400 text-center'>Service : {title}</h2>
                <h4 className='text-3xl text-center mt-2 font-semibold text-cyan-400 mb-12'> Price: ${price}</h4>
                <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                <textarea name='message' className="textarea textarea-bordered h-24 w-full my-6" placeholder="Your massage"></textarea>
                <input className='btn border-0  w-full bg-cyan-400 mb-4'type='submit' value='Place your service'></input>
            </form>
        </div>
    );
};

export default ReviewField;