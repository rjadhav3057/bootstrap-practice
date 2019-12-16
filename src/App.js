import React from 'react';
import logo from './logo.svg';
import './App.css';
import './Assets/Desktop.css'
import './Assets/mobile.css'
import { BrowserRouter as Router, NavLink, Link } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, Image, Container } from 'react-bootstrap';
import Header from './component/Header';
import DemoCar from './component/DemoCar';
import Car from './component/car';
import Footer from './component/footer';
import Routing from './component/Routing'



export default function App() {
  return (
    <div>
      <Router>
      <Header />
      <DemoCar />
      <div className="hotel">
        <h1>Upcoming Group Tours</h1>
      </div>
      <Car />
      <Routing/>
      <Footer/>
      </Router>
    </div>
  );
}


