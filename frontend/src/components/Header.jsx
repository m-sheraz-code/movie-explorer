import React from 'react';
import SearchBar from './SearchBar';

const Header = () => {
  
    return(
        <nav className="navbar">
        <div className="logo">
            <a href="/HomePage"><img src={require('../assets/logo.png')} alt="Airbnb Logo" /></a>
        </div>

        <div className={`nav-links`}>
            <a href="/HomePage">
            <i className="fa fa-home" style={{ marginRight: '8px' }}></i>
            Home
            </a>
            <a href="/MovieDetailsPage">
            <i className="fa fa-info" style={{ marginRight: '8px' }}></i>
            Movie Details
            </a>
            <a href="/FavouritePage">
            <i className="fa fa-star" style={{ marginRight: '8px' }}></i>
            Favorites
            </a>
        </div>
        
        <SearchBar/>
        </nav>
    );

};

export default Header;
