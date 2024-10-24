import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  
    return(
        <nav className="navbar">
        <div className="logo">
            <a href="/home"><img src={require('../assets/logo.png')} alt="Airbnb Logo" /></a>
        </div>

        <div className={`nav-links`}>
            <a href="/home">
            <i className="fa fa-home" style={{ marginRight: '8px' }}></i>
            Home
            </a>
            <a href="/experiences">
            <i className="fa fa-info" style={{ marginRight: '8px' }}></i>
            Movie Details
            </a>
            <a href="/online-experiences">
            <i className="fa fa-star" style={{ marginRight: '8px' }}></i>
            Favorites
            </a>
        </div>
        
        <SearchBar/>
        </nav>
    );

};

export default Header;
