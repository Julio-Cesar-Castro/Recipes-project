import styled from "styled-components";

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  height: 150vh;
  background-color: #f2f4f1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`;

export const CardsBox = styled.div`
  width: 100%;
  height: 80%;
  background-color: #f2f4f1;
`;

export const Text = styled.div`
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
  height: 95%;
  display: flex;
  align-items: center;
  justify-content: space-evenly; //
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
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
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
