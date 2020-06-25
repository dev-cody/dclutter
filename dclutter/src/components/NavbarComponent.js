import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../images/dclutter_logo.png';

class Navbar extends Component {


  render() {
    return (
      <React.Fragment>
        <nav className="main-nav" >
          <div className="logo-container" >
            <Link to='/'><img src={ logo } className="logo" alt="dclutter logl" /> </Link>
          </div>
          <div className="button-container">
            <NavLink to='/new' className='addnew-button' style={{ color: "white" }}><i className="fa fa-plus"></i></NavLink>
          </div>
        </nav>
      </React.Fragment>
    );
  }
}

export default Navbar;