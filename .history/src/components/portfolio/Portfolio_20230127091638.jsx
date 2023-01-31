import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.webp";

const data = [
    {
        id:1,
        image:IMG1,
        title:"Crypto Currency Dashboard & Financial Visualization",
        github : "https://github.com",
        demo : "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    },
    {
        id:2,
        image:IMG2,
        title:"Crypto Currency Dashboard & Financial Visualization",
        github : "https://github.com",
        demo : "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    }
    {
        id:3,
        image:IMG3,
        title:"Crypto Currency Dashboard & Financial Visualization",
        github : "https://github.com",
        demo : "https://dribble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization"
    }
]
export default function Portfolio(){
    return(
        <section id="portfolio">
            <h5>My Recent work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio_container">
                {
                    data.map(({id,image,title,github,demo})=>{
                        return(
                            <article key={id} className="portfolio_item">
                                <div className="portfolio_item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <div className="portfolio_item-cta">
                                    <a href={github} className="btn" target="_blank">Github</a>
                                    <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                                </div>
                            </article>
                        )
                    })
                }
            </div>
        </section>
    )
}