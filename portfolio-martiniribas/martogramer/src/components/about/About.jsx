import React from "react";
import './about.css'
import ME from '../../assets/me.jpg';


const About = () => {
    return(
        <section id="about">
            
            <h5>Get To Know</h5>
            <h1>About Me</h1>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={ME} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <h5>Experiece</h5>
                            <small>1+ years working</small>
                        </article>
                        <article className="about__card">
                            <h5>Projects</h5>
                            <small>20+ projects in board</small>
                        </article>
                    </div>
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam cupiditate, ducimus dolore culpa, consequuntur non libero commodi magni soluta quo ipsum ratione perspiciatis deserunt quas fuga pariatur optio nobis deleniti!
                    </p>
                    <a href="#contact" className="btn btn-primary">Contact</a>
                </div>
            </div>
        </section>
        ) 
        
};

export default About;
