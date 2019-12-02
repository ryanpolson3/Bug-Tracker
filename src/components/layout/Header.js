import React from 'react';
import Logo from "../../assets/logo.svg";

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={Logo} className="header--logo" alt="bug-tracker-logo"/>
                    </div>
                    <div className="col-6">
                        <ul className="header--time-list__container">
                            <li className="header--time-list__item">Live</li>
                            <li className="header--time-list__item">Daily</li>
                            <li className="header--time-list__item">Weekly</li>
                            <li className="header--time-list__item">Monthly</li>
                            <li className="header--time-list__item">Yearly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
