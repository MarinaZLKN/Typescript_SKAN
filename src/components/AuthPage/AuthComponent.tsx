import React from "react";
import '../../styles/AuthPage.scss';
function AuthComponent () {

    return (
        <div className="auth-component">
            <div className="wrapper">
                <div className="pic-lock"></div>
                <div className="tabs">
                    <div className="tab">
                        <input type="radio" id="tab1" name="tab-group" checked/>
                            <label htmlFor="tab1" className="tab-title">Log In
                                <div className="auth-separator"></div>
                            </label>

                            <section className="tab-content">
                                <form className="auth-center-side">
                                    <div className="auth-input-title"> Username or phone number:</div>
                                    <input className="input-1" type="text" />

                                    <div className="auth-input-title"> Password:</div>
                                    <input className="input"  type="password"/>
                                    <button  type="submit" id="auth-text" className="auth-button"> Log In </button>
                                    <div className="auth-restore-pass">
                                        <a href="#" id="text-auth">Forgot password?</a>
                                    </div>
                                </form>
                            </section>
                    </div>
                    <div className="tab">
                        <input type="radio" id="tab2" name="tab-group"/>
                            <label htmlFor="tab2"  id="tab-2" className="tab-title">Sign up
                                <div className="auth-separator1"></div>
                            </label>
                            <section className="tab-content">There was no endpoint for registration in tech task</section>
                    </div>
                </div>
            </div>
            <div className="auth-lower-side">
                <p id="p">Log in via:</p>
                <div className="auth-logos">
                    <div className="logo-1"></div>
                    <div className="logo-2"></div>
                    <div className="logo-3"></div>
                </div>
            </div>
        </div>
    )
}
export default AuthComponent;