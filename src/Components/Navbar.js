import styled from "@emotion/styled";
import React, { useState } from "react";
import logo from "../resources/newtechlogo.svg";

const StyledNavbar = styled.nav`
  max-height: 200px;
  background-color: #25abc8;
  width: 100%;
  top: 0;
  ul {
    list-style: none;
    height: 100%;

    li img {
      height: 50px;
    }
  }
`;

const Navbar = ({ props }) => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <img src={logo} alt="logo" />
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
