import React from 'react';
import logo from '../../../src/assets/logo.png'
const Footer = () => {
  return (
    <div className=' bg-slate-400'>
      <footer className="footer pl-32 py-28  text-white">
        <div>
          <img className='h-20 w-20' src={logo} alt=''></img>
          <p>Traveller Ltd.<br />Providing best traveling experience since 2002</p>
        </div>
        <div>
          <span className="footer-title text-black">Services</span>
          <a href="/" className="link link-hover text-black">Branding</a>
          <a href="/" className="link link-hover text-black">Design</a>
          <a href="/" className="link link-hover text-black">Marketing</a>
          <a href="/" className="link link-hover text-black">Advertisement</a>
        </div>
        <div>
          <span className="footer-title text-black">Company</span>
          <a href="/" className="link link-hover text-black">About us</a>
          <a href="/" className="link link-hover text-black">Contact</a>
          <a href="/" className="link link-hover text-black">Jobs</a>
          <a href="/" className="link link-hover text-black">Press kit</a>
        </div>
        <div>
          <span className="footer-title text-black">Legal</span>
          <a href="/" className="link link-hover text-black">Terms of use</a>
          <a href="/" className="link link-hover text-black">Privacy policy</a>
          <a href="/" className="link link-hover text-black">Cookie policy</a>
        </div>

      </footer>
      <hr/>
      <p className='text-center text-slate-300 pb-6'>Copyright HappyHour Services Inc. 2021 ©</p>
    </div>
  );
};

export default Footer;