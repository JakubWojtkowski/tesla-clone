import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="tesla's logo" />
      </a>

      <Menu>
        <p><a href="#">Vehicles</a></p>
        <p><a href="#">Energy</a></p>
        <p><a href="#">Charging</a></p>
        <p><a href="#">Discover</a></p>
        <p><a href="#">Shop</a></p>
      </Menu>

      <RightMenu>

      </RightMenu>

    </Container>
  );
}

export default Header;

const Container = styled.div`
    top: 0;
    left: 0;
    right: 0;
    min-height: 60px;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 40px;
`;

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    p {
        font-weight: 600;
        text-transform: uppercase;
        padding: 0 10px;
        flex-wrap: nowrap;
        font-size: 14px;
    }
`;

const RightMenu = styled.div``;
