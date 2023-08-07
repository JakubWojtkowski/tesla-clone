import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Container>
      <Menu>
        <a href="#">Tesla © 2023</a>
        <a href="#">Privacy & Legal</a>
        <a href="#">Vehicle Recalls</a>
        <a href="#">News</a>
        <a href="#">Locations</a>
      </Menu>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 10vh;
  width: 100vw;

  @media (max-width: 594px) {
    flex-direction: column;
    background: #000;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  flex: 1;

  a {
    padding: 8px;
    font-weight: 600;
    letter-spacing: 1px;
    font-size: 0.8rem;
    flex-wrap: nowrap;
    color: #c8c6c6;
  }

  @media (max-width: 594px) {
    flex-direction: column;
    margin: 20px auto;
  }
`;
