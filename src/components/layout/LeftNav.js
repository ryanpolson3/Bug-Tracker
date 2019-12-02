import React from 'react';
import { Switch, Link} from 'react-router-dom';

const LeftNav = () => {
    return (
            <div>
                <Switch>
                    <ul>
                        <li><Link to="/dashboard">Dashboard</Link></li>
                        <li><Link to="/bugs">Bugs</Link></li>
                        <li><Link to="/tickets">Tickets</Link></li>
                        <li><Link to="/reports">Reports</Link></li>
                        <li><Link to="/settings">Settings</Link></li>
                        <li><Link to="/help">Help</Link></li>
                    </ul>
                </Switch>
            </div>
    );
};

export default LeftNav;