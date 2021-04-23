import React, { useEffect, useState } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron, Button, Modal, ModalHeader, ModalBody, Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

function Header(props){
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    const handleLogin = () => {

    }
    
    return(
        <div className="">
            <Jumbotron>
                <div className="container-fluid">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6">
                            <h1>Hacker Ranking System</h1>
                            <h4>by Harsh Bawari</h4>
                        </div>
                    </div>
                </div>
            </Jumbotron>

            <Navbar expand="md">
                <div className="container">
                    <NavbarToggler onClick={toggleNav} />
                    <Collapse isOpen={isNavOpen} navbar>
                        <Nav navbar>
                        <NavItem>
                            <NavLink className="nav-link"  to='/'><span className="fa fa-home fa-lg"></span> HomePage</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="nav-link" to='/leaderboard'><span className="fa fa-bars fa-lg"></span> LeaderBoard</NavLink>
                        </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button outline onClick={toggleModal}><span className="fa fa-sign-in fa-lg">Login/SignUp</span></Button>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
            </Navbar>

            <Modal isOpen={isModalOpen} toggle={toggleModal}>
                <ModalHeader toggle={toggleModal}>Login</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleLogin}>
                        <FormGroup>
                            <Label htmlFor="username">Username</Label>
                            <Input type="text" id="username" name="username" />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="password">Password</Label>
                            <Input type="text" id="password" name="password" />
                        </FormGroup>
                        <FormGroup check>
                            <Label check>
                                <Input type="checkbox" name="remember" />
                                Remember Me
                            </Label>
                        </FormGroup>
                        <Button type="submit" value="submit" className="primary">Login</Button>
                    </Form>
                </ModalBody>
            </Modal>
        </div>
    );
}

export default Header;