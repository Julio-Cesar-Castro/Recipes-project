import PeanutSmothie from "../../assets/Peanut Smoothie.png";
import MargheritaPizza from "../../assets/Margherita Pizza.png";
import RedVelvetCake from "../../assets/Red Velvet Cake.png";
import Spoon from "../../assets/Colher.png";
import React from "react";
import {
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
  ContainerAbout,
  Division,
  FigureSpoon,
  ImageSpoon,
  Article,
  Test,
  ArticleBox,
  ArticleTitle,
  ParagraphBox,
  ParagraphText,
  ContainerForm,
  FormText,
  Form,
  FormInput,
  FormButton,
} from "./Styles";

export default function Main() {
  return (
    <Container>
      <Test>
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
      </Test>
      <ContainerAbout>
        <Division>
          <FigureSpoon>
            <ImageSpoon src={Spoon} alt="" />
          </FigureSpoon>
          <Article>
            <ArticleBox>
              <ArticleTitle>
                <h2>About</h2>
                <UnderlineUnder></UnderlineUnder>
              </ArticleTitle>
              <ParagraphBox>
                <ParagraphText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                  tincidunt, tortor nec rhoncus dictum, lorem massa tempus sem,
                  eu tincidunt libero velit sit amet velit. Nunc in euismod
                  urna. Duis dapibus, elit eu eleifend tincidunt, nulla ipsum
                  consectetur lorem, quis tempor lorem justo quis nisi. Nam
                  interdum, nisi nec mollis sagittis, enim risus euismod nisi,
                  quis rutrum quam augue id mauris. Pellentesque mattis
                  hendrerit semper. Orci varius natoque penatibus et magnis dis
                  parturient montes, nascetur ridiculus mus. Ut vestibulum nisl
                  ante, et ultricies sapien facilisis aliquam.
                </ParagraphText>
              </ParagraphBox>
            </ArticleBox>
          </Article>
        </Division>
      </ContainerAbout>
      <ContainerForm>
        <FormText>
          <h2>Subscribe</h2>
          <p>Sign up for newsletter</p>
        </FormText>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormInput type="text" placeholder="Your Email" />
          <FormButton>Submit</FormButton>
        </Form>
      </ContainerForm>
    </Container>
  );
}
