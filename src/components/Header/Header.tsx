import React from 'react';
import Logo from './Logo';
import {Link} from "react-router-dom";
import '../../styles/Header.scss';

function Header() {

    //TODO add sass loader

    return (
        <div className="header">
           <div className="logo">
               <Logo  alt="Company Logo" />
           </div>
            <div className="header_menu">
                <Link to="/">
                    <label className="menu"> Main page </label>
                </Link>
                <label className="menu"> Tariff </label>
                <label className="menu"> FAQ </label>
            </div>
            <div className="header_side-menu">
                <label className="signup">Sign up</label>
                    <div className="separator"></div>
                <Link to="/auth">
                    <button className="header-btn">Sign in</button>
                </Link>


            </div>
        </div>
    );
}


export default Header;