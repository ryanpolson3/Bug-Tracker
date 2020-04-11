import React from 'react';
import profileImage from "../../assets/profile.jpg"


import RecentActionItem from '../utils/recentActionItems';

const RecentActions = () => {
    return (
        <div className="recent-actions">
            {/*<ul className="recent-actions--list">
                <RecentActionItem userName="John Smith" position="Senior Manager" description="added new user to the team!" />
                <li className="recent-actions--item">Action 2</li>
                <li className="recent-actions--item">Action 3</li>
    </ul>*/}
            <div className="row">
                <div className="col-sm-2 profileImage">
                    <img src={profileImage} alt="Prfile Image" />
                </div>
                <div className="col-sm-8 info">
                    <p className="name" >Name</p>
                    <p className="role" >Role</p>
                    <p className="ticket-name" >Ticket Name</p>
                </div>
            </div>
        </div>
    );
};

export default RecentActions;