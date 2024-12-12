// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import logo from '../../assets/oz _logo.svg'
import './Navbar.css'

const Navabar = () => {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <>
        <img src={logo} alt="" className="logo" />
        <ul>
          <li>Home</li>
          <li>Services</li>
          <li>About us</li>
          <li>Partner programme</li>
          <li className="btn">Contact us</li>
        </ul>
      </>
    </nav>
  );
}

export default Navabar
