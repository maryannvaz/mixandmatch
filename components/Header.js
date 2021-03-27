import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ children }) => {
    return (
        <div>
            <h3 className='bar'><Link to='/'>Home</Link></h3>
            <h3 className='bar'><Link to='/'>About Us</Link></h3>
            <h3 className='bar'><Link to='/'>Contact</Link></h3>
            {children}
        </div>        
    )
}

export default Header;

/*
<img src={logo} alt="logo" className='geometry-logo' ></img>
*/