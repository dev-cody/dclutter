import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from './components/NavbarComponent';
import Main from './components/MainComponents';
import Show from './components/ShowComponent';
import NewDclutter from './components/NewDclutter';
import './App.css';

class App extends Component {

  state = {
    dclutter: {
      1: {
        _id: 1,
        title: "Test object",
        body: "Test body",
        added: new Date()
      }
    }
  }

  handleSave = (d) => {
    const ids = Object.keys(this.state.dclutter);
    const id = Math.max(...ids) + 1;

    d['_id'] = id;

    const { dclutter } = this.state;

    this.setState({
      dclutter: {
        ...dclutter,
        [id]: d
      }
    });
    return id;
  }
  

  render() {
    return(
      <BrowserRouter>
        <div className="main-content">
          <Navbar />
          <div className="container">
            <Route exact path='/' component={(props) => <Main {...props} dclutter={ this.state.dclutter }/> } />
            <Route exact path='/dclutter/:id' component={(props) => <Show {...props} dclutter={this.state.dclutter[props.match.params.id]} /> } />
            <Route exact path='/new' component={(props) => <NewDclutter {...props} onSave={this.handleSave} /> } />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
