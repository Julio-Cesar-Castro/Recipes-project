import React from "react";
import { Container, Background, Menu, Nav, Ul } from "./Styles";

export default function Header() {
  return (
    <Container>
      <Background>
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
      </Background>
    </Container>
  );
}
