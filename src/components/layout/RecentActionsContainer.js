import React from 'react';

import RecentActionItem from '../utils/recentActionItems';

const RecentActionsContainer = () => {
    return (
        <div className="recent-actions--container">
            <ul className="recent-actions--list">
                <RecentActionItem userName="John Smith" position="Senior Manager" description="added new user to the team!" />
                <li className="recent-actions--item">Action 2</li>
                <li className="recent-actions--item">Action 3</li>
            </ul>
        </div>
    );
};

export default RecentActionsContainer;