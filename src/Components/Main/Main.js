import React from "react";
import {
  StyleMain,
  Container,
  CardsBox,
  Text,
  Underline,
  Cards,
  ContainerCards,
  Figure,
  Image,
  UnderCard,
  P,
  UnderlineUnder,
} from "./Styles";

import PeanutSmothie from "../../assets/Peanut Smoothie.png";
import MargheritaPizza from "../../assets/Margherita Pizza.png";
import RedVelvetCake from "../../assets/Red Velvet Cake.png";

export default function Main() {
  return (
    <Container>
      <CardsBox>
        <Text>
          <h2>Latest Recipes</h2>
          <Underline></Underline>
        </Text>
        <ContainerCards>
          <Cards className="card1">
            <Figure>
              <Image src={RedVelvetCake} alt="Red Velvet Cake" />
            </Figure>
            <UnderCard>
              <UnderlineUnder></UnderlineUnder>
              <P>Red Velvet Cake</P>
            </UnderCard>
          </Cards>
          <Cards className="card2">
            <Figure>
              <Image src={MargheritaPizza} alt="Margherita Pizza" />
            </Figure>
            <UnderCard>
              <UnderlineUnder></UnderlineUnder>
              <P>Margherita Pizza</P>
            </UnderCard>
          </Cards>
          <Cards className="card3">
            <Figure>
              <Image src={PeanutSmothie} alt="Peanut Smoothie" />
            </Figure>
            <UnderCard>
              <UnderlineUnder></UnderlineUnder>
              <P>Peanut Smoothie</P>
            </UnderCard>
          </Cards>
        </ContainerCards>
      </CardsBox>
    </Container>
  );
}
