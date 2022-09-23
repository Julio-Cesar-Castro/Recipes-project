import React from "react";
import * as S from "./Styles"

export default function Header() {
  return (
    <S.StyleHeader>
      <S.Menu>
        <figure> </figure>
        <S.Nav>
          <S.Ul>
            <li>About</li>
            <li>Recipes</li>
            <li>Subscribe</li>
          </S.Ul>
        </S.Nav>
      </S.Menu>

    </S.StyleHeader>
  );
}
