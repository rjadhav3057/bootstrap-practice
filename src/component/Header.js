import React from 'react'

import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Image, } from 'react-bootstrap';
import LoginForm from './LoginForm';


export default function Header() {
    return (
        <div>
            <Navbar expand="lg" className="header" fixed="top">
                <Navbar.Brand href="#">
                    <img src="images/LivianoUniverseLogo.jpg" alt="First slide" height="50px" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className="box-size" />
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
        </div>
    )
}
