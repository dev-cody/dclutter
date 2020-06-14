import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/dclutter_logo.png';

//Reactstrap imports
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Navbar extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      isModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <nav className="main-nav" >
          <div className="logo-container" >
            <Link to='/'><img src={ logo } className="logo" alt="dclutter logl" /> </Link>
          </div>
          <div className="button-container">
            <button className="nav-button" onClick={this.toggleModal}>Login</button>
          </div>
        </nav>

        { /*Modal start */ }
        <div>
        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}> Login </ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="username"> Username </Label>
                                <Input type="text" id="username" name="username" 
                                    innerRef={input => this.username = input} />
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="password"> Password </Label>
                                <Input type="password" id="password" name="password" 
                                    innerRef={input => this.password = input} />
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember" 
                                        innerRef={input => this.remember = input} />
                                    Remember
                                </Label>
                            </FormGroup>
                            <Button type="submit" value="sumbit" color="primary"> Login </Button>
                        </Form>
                    </ModalBody>
                </Modal>
      </div>
          { /*Modal end */ }
      </React.Fragment>
    );
  }
}

export default Navbar;