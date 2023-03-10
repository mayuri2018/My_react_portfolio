import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";

const data = [
    {
        id:1,
        image:IMG1,
        title:"Shopping website",
        github : "https://github.com/jamiekim828/ShoppingWebsite-project",
        demo : "https://shopping-website-project.vercel.app/"
    },
    {
        id:2,
        image:IMG2,
        title:"Country website",
        github : "https://github.com/mayuri2018/Countryes-list",
        demo : "https://isa-6-front-end-project-amber.vercel.app/"
    },
    {
        id:3,
        image:IMG3,
        title:"Yummy",
        github : "https://github.com/mayuri2018/yummy",
        demo : "https://isa-6-yummy-project-6osjdznw4-mayurivijaya-gmailcom.vercel.app/"
    },
    {
        id:4,
        image:IMG4,
        title:"Food delivery",
        github : "https://github.com/mayuri2018/Food-delivery",
        demo : "https://food-delivery-five-rho.vercel.app/home"
    },
    {
        id:5,
        image:IMG5,
        title:"Note App",
        github : "https://github.com/mayuri2018/Note-App",
        demo : "https://note-app-black.vercel.app/"
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