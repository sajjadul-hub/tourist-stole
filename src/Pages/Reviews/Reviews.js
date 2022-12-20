import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import UseTitle from '../../Hooks/UseTitle';
import Card from './Card';

const Reviews = () => {
    const { user, logOut } = useContext(AuthContext);
    const [orders, setOrders] = useState([])
    UseTitle('Reviews');
    useEffect(() => {
        fetch(`https://traveller-server-talimul212.vercel.app/reviews?email=${user?.email}`, {
            headers: {
                authorication: `Bearer ${localStorage.getItem('genius')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut();
                }
                return res.json();
            })
            .then(data => {
                setOrders(data);
            })
    }, [user?.email, logOut])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure, you want to cancel this order');
        if (proceed) {
            fetch(`https://traveller-server-talimul212.vercel.app/reviews/${id}`, {
                method: 'DELETE',
                headers: {
                    authorication: `Bearer ${localStorage.getItem('genius')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('deleted successfully');
                        const remaining = orders.filter(odr => odr._id !== id);
                        setOrders(remaining);
                    }
                })
        }
    }

    const handleStatusUpdate = id => {
        fetch(`https://traveller-server-talimul212.vercel.app/reviews/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorication: `Bearer ${localStorage.getItem('genius')}`
            },
            body: JSON.stringify({ status: 'Approved' })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    const remaining = orders.filter(odr => odr._id !== id);
                    const approving = orders.find(odr => odr._id === id);
                    approving.status = 'Approved'

                    const newOrders = [approving, ...remaining];
                    setOrders(newOrders);
                }
            })
    }

    return (
        <div>
            <h2 className="text-4xl mb-12 text-center text-sky-400">You have Reviewed {orders.length} services</h2>
            {
                            orders.map(order => <Card
                                key={order._id}
                                order={order}
                                handleDelete={handleDelete}
                                handleStatusUpdate={handleStatusUpdate}
                            ></Card>)
                        }
        </div>
    );
};

export default Reviews;