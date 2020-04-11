import React from 'react';
import Logo from "../../assets/logo.svg";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <div className="row no-gutters">
                <div className="logo col-2">
                    <img src={Logo} className="" alt="App Logo"/>
                </div>
                <div className="nav col-8 justify-content-end">
                    <ul className="">
                        <li className="">Live</li>
                        <li className="">Daily</li>
                        <li className="">Weekly</li>
                        <li className="">Monthly</li>
                        <li className="">Yearly</li>
                    </ul>
                </div>
                <div className="col-2 login">
                    {/*<img src={personIcon} className="" alt="Person Icon" />
                    <p>User Name</p>*/}
                    <p><span className="fa fa-user fa-2x"></span> User Name</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
