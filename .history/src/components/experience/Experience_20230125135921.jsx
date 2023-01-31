import React from "react";
import "./experience.css";
import {BsPatchCheckFill} from "react-icons/bs"

export default function Experience (){
    return(
        <section id="experience">
            <h5>What Skills I Have</h5>
            <h2>My Experience</h2>

            <div className="container experience_container">
                <div className="experience_frontend">
                    <h3>Frontend Development</h3>
                    <div className="experience_content">
                        <article className="experience_details">
                            <BsPatchCheckFill/>
                            <h4>HTML</h4>
                            <small className="text-light">Experienced</small>
                        </article>

                        <article className="experience_details">
                            <BsPatchCheckFill/>
                            <h4>CSS</h4>
                            <small className="text-light">Experienced</small>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    )
}