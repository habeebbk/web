import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #222;
`;

const NavLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  padding: 10px;
`;

function Navbar() {
  return (
    <Nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/buy">Buy</NavLink>
      <NavLink to="/sell">Sell</NavLink>
      <NavLink to="/Rent">Rent</NavLink>
      <NavLink to="/listings">Listings</NavLink>
      <NavLink to="/contact">Contact</NavLink>

    </Nav>
  );
}

export default Navbar;
