import React from 'react';
import '../logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src="logo.svg" alt="logo" style={{width: 75}}/></a>
            <a className="navbar-brand" href="/">Directory</a>
            <a className="navbar-brand" href="/details">Details</a>
        </nav>
    );
};

export default Navbar;