import React from 'react';
import Photo from "./photo.jpeg";

function About() {
    return (
<div>
        <section className="my-5">
            <h1 id="about"><i>About Me</i></h1>
        </section>

    <section id="about-me" className="sections about-me">

        <article className="section-right">
        <div className="about-me-content">
        <img
            src={Photo}
            alt="Noemie Grau smiling"
            className="me-hero-img"
          />
        </div>
        <p className="description-about">My name is Noemie Grau. I am from France and I live in Los Angeles. 
            <br/> I am an International Marketing graduate and am currently enrolled in UCLA coding bootcamp.
        </p>
        </article>

    </section>
</div>
    );
}

export default About;