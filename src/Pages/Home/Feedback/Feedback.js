import React from 'react';
import client1 from '../../../assets/images/client_1.png'
import client2 from '../../../assets/images/client_2.jpg'
import client3 from '../../../assets/images/client_3.png'
import client4 from '../../../assets/images/client_4.jpg'
import { FaStar } from "react-icons/fa";
const Feedback = () => {
    return (
        <div>
            <h1 className='text-4xl text-center '>Here Is Some Clients<br/>
                <span className='font-bold' > Smart Feedback</span></h1>
            <div className="carousel h-80 w-full mb-12 ">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className=' bg-zinc-100 p-4 rounded-xl m-6'>
                        <center> <img src={client1} className="w-16 h-16 mb-4" alt='' /></center>
                        <div className="review_text text-center">
                            <ul className="rateing flex justify-center">
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-slate-300'></FaStar></a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <h5 className=' font-bold'>Rosalina D. Williamson</h5>
                        </div>
                    </div>
                    <div className=' bg-zinc-100 p-4 ml-4 m-6 rounded-xl'>
                        <center> <img src={client2} className="w-16 h-16 rounded-full mb-4" alt='' /></center>
                        <div className="review_text text-center">
                            <ul className="rateing flex justify-center">
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-slate-300'></FaStar></a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <h5 className=' font-bold'>Rosalina D. Williamson</h5>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div className=' bg-zinc-100 p-4 rounded-xl m-6'>
                        <center> <img src={client3} className="w-16 h-16 mb-4" alt='' /></center>
                        <div className="review_text text-center">
                            <ul className="rateing flex justify-center">
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-slate-300'></FaStar></a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <h5 className=' font-bold'>Rosalina D. Williamson</h5>
                        </div>
                    </div>
                    <div className=' bg-zinc-100 p-4 ml-4 m-6 rounded-xl'>
                        <center> <img src={client4} className="w-16 h-16 rounded-full mb-4" alt='' /></center>
                        <div className="review_text text-center">
                            <ul className="rateing flex justify-center">
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-yellow-400'></FaStar></a></li>
                                <li><a href="/"><FaStar className=' text-slate-300'></FaStar></a></li>
                            </ul>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
                            <h5 className=' font-bold'>Rosalina D. Williamson</h5>
                        </div>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Feedback;