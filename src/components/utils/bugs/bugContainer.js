import React from 'react';
import BugItem from './BugItem';

const BugContainer = () => {
    return (
        <div className="bug-container--large-container">
            <div className="row">
                <div className="col-12 col-sm-12 col-lg-9 col-xl-4">
                    <div className="bug-container--priority-text">
                        HIGH PRIORITY
                    </div>
                    <div className="bug-container--small-container">
                        <BugItem bug_id="1234" date_created="01/01/20" owner="Ryan Olson" name="Bug Name" />
                    </div> 
                </div>
                <div className="col-12 col-sm-12 col-lg-9 col-xl-4">
                    <div className="bug-container--priority-text">
                        MEDIUM PRIORITY
                    </div>
                    <div className="bug-container--small-container">
                        <BugItem bug_id="1234" date_created="01/01/20" owner="Ryan Olson" name="Bug Name" />
                    </div> 
                </div>
                <div className="col-12 col-sm-12 col-lg-9 col-xl-4">
                    <div className="bug-container--priority-text">
                        LOW PRIORITY
                    </div>
                    <div className="bug-container--small-container">
                        <BugItem bug_id="1234" date_created="01/01/20" owner="Ryan Olson" name="Bug Name" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BugContainer;