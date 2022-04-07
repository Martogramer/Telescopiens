import React from 'react'
import CTA from './header/CTA'
import './port.css';
import pro from '../assets/pro.jpg'
import ProductList from './productList/ProductList';
import Contact from './contact/Contact';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMail} from 'react-icons/ai';
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const Port=()=> {
    return (
        <div>

            <div className='navetones'>
                <nav className="nodriza">
                    <a href="https://www.linkedin.com/in/martogramer/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
                    <a href="https://www.github.com/martogramer/" target="_blank" rel="noreferrer"><BsGithub/></a>
                    <a href="https://wa.me/5493492524734/?text=Hola%20quisiera%20contratar%20tu%20servicio" target="_blank" rel="noreferrer"><BsWhatsapp /></a>
                    <a href="mailto:martin.iribass@gmail.com" target="_blank" rel="noreferrer"><AiOutlineMail /></a>
                </nav>
            </div>
            <div className="container_">
                <div className="header">
                    <div className="header__content">
                        <div className="foto">
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>
                                <p>👋Hola soy</p>
                                <h1>Martin</h1>
                                <p>Fullstack Developer</p>
                            </div>
                            <CTA />
                        </div>
                    </div>
                </div>
                <ProductList/>
                <div>
                    <div className="about-hola">
                        <h5>Get to know</h5>
                        <h1>About Me</h1>
                    </div>
                    <div className="about">
                        <div className="skills">
                            <div><h3>Skills</h3>
                        </div>
                            <div><p>asdsa</p></div>
                            <div><p>asdsa</p></div>
                            <div><p>asdsa</p></div>
                            <div><p>asdsa</p></div>
                            <div><p>asdsa</p></div>
                            <div><p>asdsa</p></div>
                        </div>
                            
                        <div className="charla">
                            <div><h3>Skills</h3>
                            <div><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam eveniet impedit saepe enim sapiente reprehenderit molestiae deserunt voluptas Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae rerum iste ut nobis eum, vitae ad maiores itaque modi accusantium libero eos, odio sapiente placeat! Sit at quae facilis quas.!</p></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio">
                    <div className="portfolio-titulo">
                        <h5>Take a look</h5>
                        <h1>Portfolio</h1>
                    </div>
                    <div className="portfolio-content">
                        <div className="items">
                            <div><img src={pro} alt="" className="items-img"/></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div><img src={pro} alt="" className="items-img"/></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div><img src={pro} alt="" className="items-img"/></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div><img src={pro} alt="" className="items-img"/></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div><img src={pro} alt="" className="items-img"/></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div><img src={pro} alt="" className="items-img"/></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <Contact/>

            </div>
        </div>
    )
}

export default Port