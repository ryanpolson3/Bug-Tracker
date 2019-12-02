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
        <Header />
        <LeftNav />
        <div className="container">
          <Switch>
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/bugs" component={Bugs} />
          </Switch>
        </div>
        <RecentActionsContainer />
      </div>
    </Router>

  );
}

export default App;
