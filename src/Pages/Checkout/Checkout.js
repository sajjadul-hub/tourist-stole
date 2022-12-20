
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';
import ServicesCard from '../Home/Services/ServicesCard';

const Checkout = () => {
    const { _id, title, price, img } = useLoaderData();
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`
        const email = user?.email || 'unregistered';
        const phone = form.phone.value;
        UseTitle('Booking');
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
        }
        console.log(order);

        fetch('https://traveller-server-talimul212.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorication: `Bearer ${localStorage.getItem('genius')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Order placed successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <>


            <div className="hero min-h-screen bg-base-200 mb-4 rounded-lg" style={{ backgroundImage: `url(${img})` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div >
                        <form onSubmit={handlePlaceOrder}>
                            <div className='shadow-2xl bg-base-100 p-6 mb-12 rounded-lg '>
                                <h2 className='text-4xl font-semibold text-cyan-400 text-center'>Service : {title}</h2>
                                <h4 className='text-3xl text-center mt-2 font-semibold text-cyan-400 mb-12'> Price: ${price}</h4>
                                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                    <input name='firstName' type="text" placeholder="First name" className="input w-full input-bordered" />
                                    <input name='lastName' type="text" placeholder="Last name " className="input w-full input-bordered" />
                                    <input name='phone' type="number" placeholder="Your phone " className="input w-full input-bordered" required />
                                    <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                                </div>
                                <input className='btn border-0  w-full bg-cyan-400 mt-5 mb-4' type='submit' value='Place your service'></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Checkout;