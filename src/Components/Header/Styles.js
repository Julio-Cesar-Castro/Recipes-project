import styled from "styled-components";
import back from "../../assets/back.png";

export const StyleHeader = styled.div`
  max-width: 1920px;
  margin: auto 0;
  width: 100%;
  height: 120vh;
  background-image: url(${back});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  color: #373737;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 50%;
`;

export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 40rem;
`;

export const Li = styled.li`
  width: 11rem;
  font-size: 1.3rem;
`;
