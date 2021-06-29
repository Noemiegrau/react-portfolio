import React from 'react';

function Navigation(props) {

const { catSelected, setCatSelected } = props;

    return (
  <nav>
    <ul>
      <li className={catSelected === "about-me"}>
          <a href="#about-me" onClick={() => setCatSelected("about-me")}>About Me</a> 
      </li>
      <li className={catSelected === "portfolio"}>
          <a href="#portfolio" onClick={() => setCatSelected("portfolio")}>Portfolio</a>
      </li>
      <li className={catSelected === "resume"}>
          <a href="#resume" onClick={() => setCatSelected("resume")}>Resume</a>
      </li>
      <li className={catSelected === "contactform"}>
          <a href="#contactform" onClick={() => setCatSelected("contactform")}>Contact Me</a>
      </li>
    </ul>  
  </nav>
    );
  }

export default Navigation;