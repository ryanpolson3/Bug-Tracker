import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import './styles/global.scss';

// Layout
import Nav from './components/layout/Nav';
import Header from './components/layout/Header';
import Main from './components/layout/Main';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container-fluid">
          <div className="row no-gutters">

            <div className="col-6 col-sm-2">
              <Nav/>
            </div>

            <div className="col-6 col-sm-10">

              <div className="row no-gutters">
                <div className="col-sm-12">
                  <Header/>
                </div>
              </div>

              <div className="row no-gutters">
                <div className="col-sm-12">
                  <Main/>
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
