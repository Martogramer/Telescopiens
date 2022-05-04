/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './menu.css'

function MENU() {
    const toggle = document.getElementById('toggle')
    const nav = document.getElementById('nav')
    return (
        <div>
            <nav className="active" id="nav">
                <ul>
                    <li><a href="#">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#projects">projects</a></li>
                    <li><a href="#contact">contact</a></li>
                </ul>
                <button className="icon" id="toggle" onClick={(toggle) => nav.classList.toggle('active')}>
                    <div className="line line1"></div>
                    <div className="line line2"></div>
                </button>
            </nav>
        </div>
)}
export default MENU