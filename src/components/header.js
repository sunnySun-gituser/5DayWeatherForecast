import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return ( 
          <header className="App-header">
            <NavLink to={'/'} exact ><h1 className='App-title'>5-Day Weather Forecast</h1></NavLink>
          </header>
     );
}
 
export default Header;