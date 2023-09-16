import React from "react";
import '../../styles/AuthPage.scss';
import AuthPicture from "./AuthPicture";
import AuthComponent from "./AuthComponent";


function AuthPage () {
    return (
        <div className="auth-content">
            <div className="auth-left_side-content">
                <div className="auth-title">
                    <h1>To subscribe to the tariff you must log in.</h1>
                </div>
                <div className="auth-image">
                    <AuthPicture alt="Auth page picture" />
                </div>
            </div>
            <div className="auth-form">
                <AuthComponent/>
            </div>
        </div>
    )
}

export default AuthPage;