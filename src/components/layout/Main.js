import React from 'react';
import { BrowserRouter as Switch} from 'react-router-dom';

// Pages
//import Dashboard from './';
//import Bugs from './src/components/pages/Bugs';

const Main = () => {
    return (
        <div className="main">
            <Switch>
                {/*<Route exact path="/dashboard" component={Dashboard} />*/}
                {/*<Route exact path="/bugs" component={Bugs} />*/}
            </Switch>
        </div>
    );
};

export default Main;