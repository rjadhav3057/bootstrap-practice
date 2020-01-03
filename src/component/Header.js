import React from 'react'

import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Image, } from 'react-bootstrap';
import LoginForm from './LoginForm';


export default function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="header" >
                <Navbar.Brand href="#">
                    <img src="images/LivianoUniverseLogo.jpg" alt="First slide" height="50px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="header-name">
                        <ul className="header-column">
                            <li className="header-column-link"><NavLink className="sass" exact to="/" >Home</NavLink></li>
                            <li className="header-column-link"><NavLink className="sass" exact to="/Employee">Employee</NavLink> </li>
                            <li className="header-column-link"><NavLink className="sass" exact to="/Department">Department</NavLink></li>
                            <li className="header-column-link"><NavLink className="sass" exact to="/Leave">Leave</NavLink></li>
                        </ul>
                    </Nav>
                    <Form inline>
                        <LoginForm />
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            {/* <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
      </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar> */}
        </div>
    )
}
