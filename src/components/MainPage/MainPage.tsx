import React from 'react';
import MainPageLogo from "./MainPageLogo";
import '../../styles/MainPage.css'

function MainPage () {
    return (
        <div className="main_page">
            <div className="upper-page-content">
                <div className="info-box">
                    <div className="main-text">
                        <h1>Service for searching publications about a company by its tax identification number</h1>
                    </div>
                    <div className="under-text">
                        <span>Comprehensive analysis of publications, receiving data in PDF format by email.</span>
                    </div>
                        <div className="btn_main-page">
                                <button className="btn">Request data</button>
                        </div>
                </div>
                    <div className="picture">
                        <MainPageLogo alt="Main page logo"/>
                    </div>
            </div>

        </div>
    )
};

export default MainPage;