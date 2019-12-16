import React from 'react'

import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Image, } from 'react-bootstrap';


export default function Header() {
    return (
        <div>

            <Navbar expand="lg" className="header" fixed="top">
                <Navbar.Brand href="#"><img src="images/LivianoUniverseLogo.jpg" alt="First slide" height="100px"/>
                Liviano Rooms
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <ul>
                            <li><NavLink exact activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/Employee">Employee</NavLink> </li>
                            <li><NavLink exact activeClassName="active" to="/Department">Department</NavLink></li>
                            <li><NavLink exact activeClassName="active" to="/Leave">Leave</NavLink></li>
                        </ul>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
