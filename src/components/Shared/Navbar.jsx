import React from 'react';
import '../logo.svg';

const Navbar = () => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="/"><img src="logo.svg" alt="logo" style={{width: 50}}/></a>
            <a className="navbar-brand" href="/">Directory</a>
            <a className="navbar-brand" href="/details">Details</a>
            <form className="form-inline">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;