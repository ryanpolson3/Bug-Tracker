import React from 'react';
import { Switch, NavLink} from 'react-router-dom';

const LeftNav = () => {
    return (
            <div className="left-nav--container">
                <Switch>
                    <ul className="left-nav">
                        <li className="left-nav--item"><NavLink to="/dashboard">Dashboard</NavLink></li>
                        <li className="left-nav--item"><NavLink to="/bugs">Bugs</NavLink></li>
                        <li className="left-nav--item"><NavLink to="/tickets">Tickets</NavLink></li>
                        <li className="left-nav--item"><NavLink to="/reports">Reports</NavLink></li>
                        <li className="left-nav--item"><NavLink to="/settings">Settings</NavLink></li>
                        <li className="left-nav--item"><NavLink to="/help">Help</NavLink></li>
                    </ul>
                </Switch>
            </div>
    );
};

export default LeftNav;