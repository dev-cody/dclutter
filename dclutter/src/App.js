import React from 'react';
import { BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Navbar from './components/NavbarComponent';
import NewDclutter from './components/NewDclutter';
import './App.css';
import DclutterList from './components/DclutterList';

function App() {
  return(
    <Router>
      <Navbar />
      <div className="container">
        <Route path='/' component={DclutterList}/>
        <Route exact path='/new' component={NewDclutter} />
        <Redirect to='/' />
      </div>
    </Router>
  );
}

export default App;
