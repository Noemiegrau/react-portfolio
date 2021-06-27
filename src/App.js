import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Project from './components/Project';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [catSelected, setCatSelected] = useState("about");

  const chooseCat = () => {
    switch (catSelected) {
            case "about":
              return <About />;
            case "project":
              return <Project />;
            case "contactform":
              return <ContactForm />;
            case "resume":
              return <Resume />;
            default: 
              return null;
    }
  };

  return (
    <div>
      <Header catSelected={catSelected} setCatSelected={setCatSelected}></Header>
      <div>
        <main>
            {chooseCat()}
        </main>
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
