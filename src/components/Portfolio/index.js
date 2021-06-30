import React from 'react';
import Project from '../Project'

function Portfolio(props) {
    return (
      <div>
        <h1 id="portfolio"><i>Portfolio</i></h1>
        <section id="portfolio-container">
          <Project />
        </section>
      </div>
    );
  }

export default Portfolio;