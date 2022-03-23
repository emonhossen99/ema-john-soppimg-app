import React from 'react';
import logo from'../../images/Logo.svg';
import './Header.css'

const Header = () => {
    return (
        <nav className='header'>
        <img className="img-fluid"src={logo} alt="" />
        <div> 
            <a href="/home">Home</a>
            <a  href="/about">About</a>
            <a href="/Services">Services</a>  
            <a  href="/Contact">Contact</a>
        </div>
    </nav>
    );
};

export default Header;