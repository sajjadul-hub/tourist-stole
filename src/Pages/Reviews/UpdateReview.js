import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';


const UpdateReview = () => {
    const {_id,serviceName } = useLoaderData();
    console.log( serviceName);
    const { user } = useContext(AuthContext);
    const handlePlaceOrder = event => {
        event.preventDefault();
        const form = event.target;
        const email = user?.email || 'unregistered';
        const message = form.message.value;
        const ratting = form.ratting.value;

        const order = {
            service: _id,
            email,
            serviceName,
            ratting,
            message
        }
        console.log(order);

        fetch('https://traveller-server-talimul212.vercel.app/reviews', {
            method: 'PUT',
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
                    alert('Review successfully Updated')
                    form.reset();

                }
            })
            .catch(er => console.error(er));
    }
    return (
        <>
        <div className="hero min-h-screen mb-4 rounded-lg" >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100 p-3 mb-4 rounded-lg">
                        <form onSubmit={handlePlaceOrder}>
                            <h2 className='text-4xl font-semibold text-cyan-400 text-center my-8'>Review the {serviceName} <br/>service.</h2>
                            <label className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input name="email" type="text" placeholder="Your email" defaultValue={user?.email} className="input input-ghost w-full  input-bordered" readOnly />
                            <label className="label">
                                <span className="label-text font-semibold">Ratting</span>
                            </label>
                            <input name='ratting' required type="number" placeholder="Ratting: 0 - 5 number" className="input input-ghost w-full  input-bordered" />
                            <label className="label">
                                <span className="label-text font-semibold">Your massage</span>
                            </label>
                            <textarea name='message' className="textarea textarea-bordered h-24 w-full mb-4" placeholder="Your massage"></textarea>
                            <input className='btn border-0  w-full bg-cyan-400 mb-4' type='submit' value='Updated'></input>
                        </form>
                </div>
            </div>
        </div>
    </>
    );
};

export default UpdateReview;