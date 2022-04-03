import React from "react";
import styles from './header.css';
import CTA from './CTA';
//import ME from '../../assets'
import HeaderSocials from './HeaderSocials'

const Header = () => {
    return(
        
        <header id="header" style={styles.header}>
            <div className="container header__container">
                
                <div className="header__columns">
                    <div className="na">
                        <h5>Hola 👋, soy</h5>
                        <h1>Martin</h1>
                        <h5 className="text-light">Fullstack Developer</h5>
                        <CTA />
                    </div>

                    <div className="me">
                        <img src="" alt="" />
                    </div>
                </div>

                <HeaderSocials />
                <a href="#contact" className='scroll__down'> Scroll Down</a>
            </div>
        </header>
        
        ) 
        
};

export default Header;
