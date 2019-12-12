import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/global.scss';


// Layout
import Header from './components/layout/Header';
import LeftNav from './components/layout/LeftNav';
import RecentActionsContainer from './components/layout/RecentActionsContainer';

// Pages
import Dashboard from './components/pages/Dashboard';
import Bugs from './components/pages/Bugs';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row no-gutters">
            <div className="col-md-1">
              <LeftNav />
            </div>
            <div className="col-md-11">
              <Header />
              <div className="row no-gutters">
                <div id="Main" className="col-sm-8 col-md-10">
                  <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/bugs" component={Bugs} />
                  </Switch>
                </div>
                <div className="col-sm-4 col-md-2">
                  <RecentActionsContainer />
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </Router>

  );
}

export default App;
