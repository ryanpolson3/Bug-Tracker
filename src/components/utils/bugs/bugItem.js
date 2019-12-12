import React from 'react';
import UserIcon from '../../../assets/personIcon.svg';
import FlagUnfilledIconWhite from '../../../assets/flagUnfilledIconWhite.svg';
// import FlagFilledIconWhite from '../../../assets/flagFilledIconWhite.svg';

const BugItem = (props) => {
    const { bug_id, date_created, owner, name } = props;

    return (
        <div className="bug-item--container">
            <div className="row no-gutters align-items-center">
                <div className="col-3 col-sm-2 col-lg-2">
                    <div className="bug-item--user-icon">
                        <img alt="User Icon" src={UserIcon} />
                    </div>
                </div>
                <div className="col-8 col-sm-10 col-md-9">
                    <div className="row">
                        <div className="col-12">
                            <div className="bug-item--bug-info">
                                <span className="bug-item--bug-name">{name}</span><br></br>
                                <span className="bug-item--bug_id" >#{bug_id}</span> |
                                <span className="but-item--date_created" >{date_created}</span> |
                                <span className="bug-item--owner" >Submitted by {owner}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-1 col-sm-1 col-md-1">
                    <div className="bug-item--flagunfillediconwhite">
                        <img alt="Flag Icon" src={FlagUnfilledIconWhite} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BugItem;