import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import mountains from "./53.png";
import hippies from "./54.png"


export default function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="" element={<Homepage/>} />
        <Route path="/about" element={<About />}/>
        <Route path="/vans" element={<Vans />}/>
      </Routes> 
      <Footer />
    </BrowserRouter>
  )
}

function Nav() {
  return (
    <div>
    <div className="navbar">
          <Link to="/" className="vanlife">#VANLIFE</Link>
        <div className="navlinks">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </div>
      </div>
  )
}

function Footer() {
  return(
    <div className="footer">
      <p>©2023 #VANLIFE</p>
    </div>
  )
}

function Homepage() {
  return (
    <div className="homepage-container">
      <div className="homepage-content">
        <h1>You got the travel plans, we got the travel vans.</h1>
        <p>Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</p>
        <button>Find your van</button>
      </div>
      <img className="homepage-image" src={mountains} alt="mountain" />
    </div>
  );
}



function Vans () {
  return (
    <div>
      <h1>This is the About page</h1>
    </div>
  )
}

function About () {
  return (
     <div>
      <img src={hippies} alt="hippies on a camper van"/>
        <div className="about-text">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1> 
          <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.</p>
          <p>(Hitch costs extra 😉)</p>
          <p>Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>
          
          <div className="orange-box">
            <h2>Your destination is waiting.</h2>
            <h2>Your van is ready.</h2>
            <button>Explore our vans</button>
            
          </div>
        </div>
    </div>
  )
}

ReactDOM
  .createRoot(document.getElementById('root'))
  .render(<App />);
