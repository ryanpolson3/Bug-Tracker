import React from 'react';

const RecentActionItems = (props) => {
    const  {userName, position, description}  = props;
    return (
        <div className="recent-actions--item__container">
            <h2>{userName}</h2>
            <h3>{position}</h3>
            <p>{description}</p>
        </div>
    );
};

export default RecentActionItems;