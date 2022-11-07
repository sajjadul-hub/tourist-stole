import React from 'react';
import world from'../../../assets/images/about_us/world.jpg'
const About = () => {
    return (
      <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
          <div className='relative w-1/2'>
              <img src={world} alt="" className="w-4/5 h-full rounded-lg shadow-2xl" />
              
          </div>
          <div className='w-1/2'>
              <p className="text-2xl font-bold text-orange-600">About Me</p>
              <h1 className="my-5 text-5xl font-bold">
                  I am qualified <br />
                  & of experience <br />
                  in this field</h1>
              <p className="py-6">With the overwhelming number of travel guides that exist out there, it's hard to find one that'll satisfy your wanderlust or inspire your next travel. Luckily for you, we've found all of the best places to look for travel inspiration. Keep reading to see all of the best travel guide websites that'll help guide your next travels! </p>
             
              <button className="btn btn-primary">Get More Info</button>
          </div>
      </div>
  </div>
    );
};

export default About;