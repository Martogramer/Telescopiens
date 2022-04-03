import React from "react";
import './nav.css';
import {AiFillHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {MdOutlineMessage} from 'react-icons/md'
import {GoBook} from 'react-icons/go'
import {MdRoomService} from 'react-icons/md'
import {useState} from 'react'



const Nav = () => {
    const [activeNav, setActiveNav] = useState('#')
    return(
        <nav>
            <a href="#header" onClick={()=>setActiveNav('#header')} className={activeNav === '#header' ? 'active' : ''}><AiFillHome /></a>
            <a href="#about" onClick={()=>setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
            <a href="#portfolio" onClick={()=>setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><GoBook /></a>
            <a href="#services" onClick={()=>setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><MdRoomService /></a>
            <a href="#contact" onClick={()=>setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineMessage /></a>
        </nav>
        ) 
        
};

export default Nav;
