import React from 'react'
import CTA from './header/CTA'
import './port.css';
import pro from '../assets/pro.jpg'


const Port=()=> {
    return (
            <div className="container_">
                
                <div className="header">
                    <div className="header__content">
                        <div className="foto">
                            <img src="" alt="" />
                        </div>
                        <div>
                            <div>
                                <h5>Hola soy</h5>
                                <h1>Martin</h1>
                                <h5>Fullstack Developer</h5>
                            </div>
                            <CTA />
                        </div>
                    </div>
                </div>

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
                            <div className="items-img"><img src={pro} alt="" /></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div className="items-img"><img src={pro} alt="" /></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div className="items-img"><img src={pro} alt="" /></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div className="items-img"><img src={pro} alt="" /></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div className="items-img"><img src={pro} alt="" /></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        <div className="items">
                            <div className="items-img"><img src={pro} alt="" /></div>
                            <h3>titulo del project</h3>
                            <div className="cuadro">
                                <a href="" className="btn">Github</a>
                                <a href="" className="btn">Demo</a>
                            </div>
                        </div>
                        

                    </div>
                </div>


            </div>
    )
}

export default Port