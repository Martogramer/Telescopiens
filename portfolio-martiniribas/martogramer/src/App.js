import React from 'react';
import Particles from "react-tsparticles";
import './App.css';
import particlesOptions from "./particles.json";
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Exp from './components/exp/Exp'
import Portfolio from './components/portfolio/Portfolio'
import Reseñas from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
    return (
        <div className="App">
            <Particles options={particlesOptions}/>
            <Header />
            <Nav />
            <About />
            <Exp />
            <Portfolio />
            <Reseñas />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
