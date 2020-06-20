import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import RouterURL from './RouterURL';
import Header from './components/Header';
import ConfigTheme from './components/ConfigTheme';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
        <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">

        {/* Header */}
        <Header/>
        {/* Edn header */}

        {/* Config */}
        <ConfigTheme/>
        {/* Edn Config */}

        {/* Main */}
        
        <div className="app-main">

          {/* Slide bar MENU */}
          <SideBar/>
          {/* End slidebar MENU */}

          
          <div className="app-main__outer">

              {/* Main contents */}
                <RouterURL/>
              {/* End Main contents */}
                
              {/* Footer */}
                <Footer/>
              {/* End Footer */}

          </div>

        </div>
        {/* End Main */}

      </div>
    </Router>
  );
}

export default App;
