import React from 'react';
import'./Footer.css';
import logo from '../../../src/assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
      <footer className="footer pl-32 py-28  text-white">
        <div>
          <img className='h-20 w-20' src={logo} alt=''></img>
          <p>Traveller Ltd.<br />Providing best traveling experience since 2002</p>
          <p>Copyright [email protected]</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">Branding</a>
          <a href="/" className="link link-hover">Design</a>
          <a href="/" className="link link-hover">Marketing</a>
          <a href="/" className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/" className="link link-hover">About us</a>
          <a href="/" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;