import React from 'react';
import Navigation from '../Navigation'

function Header(props) {

    const { catSelected, setCatSelected } = props;

    return (
      <header>
        <h1>
            <h1>Noemie Grau</h1>
        </h1>
          <Navigation catSelected={catSelected} setCatSelected={setCatSelected}></Navigation>
      </header>
    );
  }

export default Header;