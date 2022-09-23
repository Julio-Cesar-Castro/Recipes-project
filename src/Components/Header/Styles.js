import styled from "styled-components";
import back from "../../assets/back.png"



export const StyleHeader = styled.div`
  background-image: url(${back});
  background-repeat:no-repeat;
  background-size:100%;
  color: #373737;
  width:100%;
  height: 120vh;

`;

export const Menu = styled.div`
border: solid red;
display:flex;
justify-content: space-between;

`;

export const Nav = styled.nav`
border: solid red;
display:flex;
justify-content: space-between;
width:50%;
`;


export const Ul = styled.ul`
border:solid;
  display: flex;
  justify-content: space-between;
  list-style: none;
  width: 40rem;
`;

export const Li = styled.li`
width: 11rem;
font-size: 1.3rem;

`;