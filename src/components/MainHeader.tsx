import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainHeader.scss';

const MainHeader = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <NavLink activeClassName="active" to="/welcome">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/products">
              Products
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
