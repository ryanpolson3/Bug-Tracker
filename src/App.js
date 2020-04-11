import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './styles/global.scss';


// Layout
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import RecentActions from './components/layout/RecentActions';

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
              <Nav />
            </div>
            <div className="col-md-11">
              <Header/>
              <div className="row no-gutters">
                <div id="Main" className="col-sm-8 col-md-9">
                  <Switch>
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/bugs" component={Bugs} />
                  </Switch>
                </div>
                <div className="col-sm-4 col-md-3">
                  <RecentActions/>
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
