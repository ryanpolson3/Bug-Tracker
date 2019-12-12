import React from 'react';
import { Switch, NavLink} from 'react-router-dom';

const LeftNav = () => {
    return (
            <div className="left-nav--container">
                <Switch>
                    <ul>
                        <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li><NavLink to="/bugs">Bugs</NavLink></li>
                        <li><NavLink to="/tickets">Tickets</NavLink></li>
                        <li><NavLink to="/reports">Reports</NavLink></li>
                        <li><NavLink to="/settings">Settings</NavLink></li>
                        <li><NavLink to="/help">Help</NavLink></li>
                    </ul>
                </Switch>
            </div>
    );
};

export default LeftNav;