import React, { Component } from 'react';
import BugContainer from '../utils/bugs/BugContainer';

class Bugs extends Component {
    render() {
        return (
            <div className="bug-page--container">
                <div className="row no-gutters">
                    <div className="col-4">
                        <h1>BUGS</h1>
                    </div>
                    <div className="col-8">
                        <div className="bug-page--report-bug-button">
                            <h1>Report Bug Button</h1>
                        </div>
                    </div>
                    <div className="col-12">
                        <BugContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default Bugs;