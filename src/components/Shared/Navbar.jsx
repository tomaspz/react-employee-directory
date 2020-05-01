import React from 'react';
import '../logo.svg';

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-dark">
            <a class="navbar-brand" href="/"><img src="logo.svg" alt="logo" style={{width: 50}}/></a>
            <a class="navbar-brand" href="/">Directory</a>
            <a class="navbar-brand" href="/details">Details</a>
            <form class="form-inline">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    );
};

export default Navbar;