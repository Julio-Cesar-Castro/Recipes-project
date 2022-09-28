import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  background-color: #f2f4f1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  flex-direction: column;
`;

export const Test = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #f2f4f1;
`;

export const CardsBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f4f1;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;

export const Text = styled.div`
  margin-top: 200px;
  width: 100%;
  height: 8%;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  color: #373737;

  & > h2 {
    font-size: 40px;
  }
`;

export const Underline = styled.div`
  width: 104px;
  height: 6px;
  background-color: #373737;
  border-radius: 10px;
`;

export const ContainerCards = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 90%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const Cards = styled.div`
  width: 470px;
  height: 650px;
  box-shadow: 0px 7px 6px #00000029;
  opacity: 1;
`;

export const Figure = styled.figure`
  width: 100%;
  height: 50%;
  background-color: #ffffff;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    padding: 15px;
    border-radius: 20px;
  }
`;

export const UnderCard = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
  background-color: #ffffff;
`;

export const UnderlineUnder = styled.div`
  width: 65px;
  height: 4px;
  background-color: #373737;
  border-radius: 10px;
`;

export const P = styled.p`
  font-size: 32px;
  color: #373737;
`;

export const ContainerAbout = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 957px;
`;

export const Division = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const FigureSpoon = styled.figure`
  width: 50%;
  height: 100%;
`;

export const ImageSpoon = styled.img`
  width: 100%;
  height: 100%;
`;

export const Article = styled.article`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ArticleBox = styled.div`
  width: 576px;
  height: 477px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

export const ArticleTitle = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  & > h2 {
    font-size: 40px;
    text-transform: uppercase;
    color: #373737;
  }
`;

export const ParagraphBox = styled.div`
  width: 100%;
  height: 301px;
`;

export const ParagraphText = styled.p`
  font-size: 20px;
  line-height: 32px;
  text-align: left;
  color: #373737;
  opacity: 1;
`;

export const ContainerForm = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 764px;
  background-color: #dfe4de;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 30px;
`;

export const FormText = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 10px;

  & > h2 {
    color: #373737;
    font-size: 42px;
    text-transform: uppercase;
  }

  & > p {
    color: #373737;
    font-size: 32px;
  }
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  flex-direction: column;
  gap: 35px;
`;

export const FormInput = styled.input`
  width: 792px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  padding-left: 50px;
  padding-right: 50px;
  font-size: 24px;
  color: #707070;

  &::placeholder {
    font-size: 24px;
    color: #707070;
  }
`;

export const FormButton = styled.button`
  width: 240px;
  height: 81px;
  outline: none;
  background-color: transparent;
  border: 6px solid #373737;
  color: #373737;
  font-size: 24px;
  text-transform: uppercase;
  opacity: 1;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
