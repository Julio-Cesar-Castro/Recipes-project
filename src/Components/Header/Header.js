import React from "react";
import { StyleHeader, Menu, Nav, Ul } from "./Styles";

export default function Header() {
  return (
    <StyleHeader>
      <Menu>
        <figure> </figure>
        <Nav>
          <Ul>
            <li>About</li>
            <li>Recipes</li>
            <li>Subscribe</li>
          </Ul>
        </Nav>
      </Menu>
    </StyleHeader>
  );
}
