import React from 'react';
import Logo from './Logo';
import '../../styles/Header.css';

function Header() {

    //TODO add sass loader

    return (
        <div className="header">
           <div className="logo">
               <Logo  alt="Company Logo" />
           </div>
            <div className="header_menu">
                <label className="menu"> Main page </label>
                <label className="menu"> Tariff </label>
                <label className="menu"> FAQ </label>
            </div>
            <div className="header_side-menu">
                <label className="signup">Sign up</label>
                    <div className="separator"></div>
                    <button className="header-btn">Sign in</button>

            </div>
        </div>
    );
}


export default Header;