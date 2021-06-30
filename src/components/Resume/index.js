import React from 'react';
import DownloadLink from "react-download-link";

function Resume() {

  return (
<div id="container-resume">
{/* <p>Download my <a href="./myResume.png">resume</a></p> */}

  <section>
    <h1 id="resume"><i>Resume</i></h1>
  </section>

<DownloadLink
    label="Download my Resume"
    filename="myResume.png"
    id="downloadResume"
    exportFile={() => Promise.resolve("My cached data")}
/>

          <h2>Front-end Proficiencies</h2>
          <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> Javascript</li>
            <li> JQuery</li>
            <li> Responsive Design</li> 
            <li> React</li>
            <li> Bootstrap</li>
          </ul>
          <h2>Back-end Proficiencies</h2>
          <ul>
          <li> APIs</li>
          <li> Node</li>
          <li> Express</li>
          <li> MySQL, Sequelize</li>
          <li> MongoDB, Mongoose</li> 
          <li> REST</li>
          <li> MVC</li>
          </ul>
          </div>
  );
}

export default Resume;