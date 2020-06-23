import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/dclutter_logo.png';

//Reactstrap imports
import {Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label, Button } from 'reactstrap';

class Navbar extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      isModalOpen: false,
      isRegisterModalOpen: false
    }
    this.toggleModal = this.toggleModal.bind(this);
    this.toggleRegisterModal = this.toggleRegisterModal.bind(this);
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }

  toggleRegisterModal() {
    this.setState({
      isRegisterModalOpen: !this.state.isRegisterModalOpen
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
            <Link to='/new' className='addnew-button' style={{ color: "white" }}><i className="fa fa-plus"></i></Link>
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
                            <div className="form-buttons">
                              <Button type="submit" value="sumbit" color="success"> login </Button>
                              <Button onClick={this.toggleRegisterModal} color="secondary"> register </Button>
                            </div>
                              <Modal isOpen={this.state.isRegisterModalOpen} toggle={this.toggleRegisterModal} >
                              <ModalHeader toggle={this.toggleModal}>Register</ModalHeader>
                              <ModalBody>
                                <Form onSubmit={this.handleResiger}>
                                  <FormGroup>
                                    <Label htmlFor="fname"> first name </Label>
                                    <Input type="text" id="fname" name="fname"/>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor="lname"> last name </Label>
                                    <Input type="text" id="lname" name="lname"/>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor="email"> email </Label>
                                    <Input type="email" id="email" name="email"/>
                                  </FormGroup>
                                  <FormGroup>
                                    <Label htmlFor="password"> password </Label>
                                    <Input type="password" id="password" name="password"/>
                                  </FormGroup>
                                </Form>
                                <div className="form-buttons">
                                  <Button type="submit" value="sumbit" color="success"> register </Button>
                                  <Button onClick={this.toggleModal} color="info"> cancel </Button>
                                </div>
                              </ModalBody>
                              </Modal>
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