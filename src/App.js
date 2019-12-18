import React from 'react';
import './Assets/Desktop.css'
import './Assets/mobile.css'
import { BrowserRouter as Router} from "react-router-dom";

import Header from './component/Header';
import Sliders from './component/Sliders';
import Tours from './component/Tours';
import Footer from './component/footer';
import Routing from './component/Routing';
import LoginForm from './component/LoginForm';



export default function App() {
  return (
    <div>

      <Router>
      <Header />
      <Sliders />
      <div className="tours">
        <h1>Upcoming Group Tours</h1>
      </div>
      <Tours/>
      <Routing/>
      <Footer/>
      </Router>
    </div>
  );
}


