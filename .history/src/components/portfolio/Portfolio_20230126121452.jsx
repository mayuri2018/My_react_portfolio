import React from "react";
import "./portfolio.css";
import IMGI from "../../assets/portfolio1.jpg"

export default function Portfolio(){
    return(
        <section id="portfolio">
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                <article className="portfolio_item">
                    <div className="portfolio_item-image">
                        <img src={IMGI} alt=""/>
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <a href="https://github.com" className="btn" target="_blank">Github</a>
                    <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
                </article>
            </div>
        </section>
    )
}