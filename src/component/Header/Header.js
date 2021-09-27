import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className="container-fluid text-center header-bg bg-success bg-gradient text-white">
            <img className="img-fluid" src="https://cdn2.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="" />
            <h2>Choose Your <span>Pokemon!</span></h2>
            <h5>Add the best legendary pokemon from pokedex.</h5>
            <h1>Budget : $5000000</h1>
        </div>
    );
};

export default Header;