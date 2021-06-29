import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import ContactForm from './components/ContactForm';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {
  const [catSelected, setCatSelected] = useState("about");

  const chooseCat = () => {
    switch (catSelected) {
            case "about-me":
              return <About />;
            case "portfolio":
              return <Portfolio />;
            case "contactform":
              return <ContactForm />;
            case "resume":
              return <Resume />;
            default: 
              return <About />;
    }
  };

  return (
    <div>
      <header>
        <Header catSelected={catSelected} setCatSelected={setCatSelected}></Header>
      </header>
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
