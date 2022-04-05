import React from "react";
import './portfolio.css';
import pro from '../../assets/pro.jpg';

const Portfolio = () => {
    return(
        <section id="portfolio">
            <h5>Take a look!</h5>
            <h1>Portfolio</h1>
            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image"><img src={pro} alt="" /></div>
                    <h3>titulo del project</h3>
                    <div className="portfolio__item-cta">
                    <a href="http://github.com/" className="btn" target="_blank">GitHub</a>
                    <a target='_blank' href="http://github.com/" className="btn btn-primary" >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"><img src={pro} alt="" /></div>
                    <h3>titulo del project</h3>
                    <div className="portfolio__item-cta">
                    <a href="http://github.com/" className="btn" target="_blank">GitHub</a>
                    <a target='_blank' href="http://github.com/" className="btn btn-primary" >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"><img src={pro} alt="" /></div>
                    <h3>titulo del project</h3>
                    <div className="portfolio__item-cta">
                    <a href="http://github.com/" className="btn" target="_blank">GitHub</a>
                    <a target='_blank' href="http://github.com/" className="btn btn-primary" >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"><img src={pro} alt="" /></div>
                    <h3>titulo del project</h3>
                    <div className="portfolio__item-cta">
                    <a href="http://github.com/" className="btn" target="_blank">GitHub</a>
                    <a target='_blank' href="http://github.com/" className="btn btn-primary" >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"><img src={pro} alt="" /></div>
                    <h3>titulo del project</h3>
                    <div className="portfolio__item-cta">
                    <a href="http://github.com/" className="btn" target="_blank">GitHub</a>
                    <a target='_blank' href="http://github.com/" className="btn btn-primary" >Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image"><img src={pro} alt="" /></div>
                    <h3>titulo del project</h3>
                    <div className="portfolio__item-cta">
                    <a href="http://github.com/" className="btn" target="_blank">GitHub</a>
                    <a target='_blank' href="http://github.com/" className="btn btn-primary" >Live Demo</a>
                    </div>
                </article>
                    
            </div>
        </section>
        ) 
        
};

export default Portfolio;
