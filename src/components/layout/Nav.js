import React from 'react';
import { Switch, NavLink} from 'react-router-dom';

const Nav = () => {
    return (
        <div className="switch">
            <Switch>
                <nav className="nav flex-column">
                    <li><NavLink className="fa fa-tachometer-alt" to="/dashboard"> Dashboard</NavLink></li>
                    <li><NavLink className="fa fa-bug" to="/bugs"> Bugs</NavLink></li>
                    <li><NavLink className="fa fa-ticket-alt" to="/tickets"> Tickets</NavLink></li>
                    <li><NavLink className="fa fa-folder-open" to="/reports"> Reports</NavLink></li>
                    <li><NavLink className="fa fa-cog" to="/settings"> Settings</NavLink></li>
                    <li><NavLink className="fa fa-question-circle" to="/help"> Help</NavLink></li>
                </nav>
            </Switch>
        </div>
    );
};

export default Nav;