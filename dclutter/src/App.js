import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from './components/NavbarComponent';
import NewDclutter from './components/NewDclutter';
import './App.css';
import DclutterList from './components/DclutterList';

function App() {
  return(
    <Router>
      <div className="main-content">
        <Navbar />
        <br />
          <Route path='/' component={DclutterList}/>
          <Route path='/new' component={NewDclutter} />
      </div>
    </Router>
  );
}

export default App;
