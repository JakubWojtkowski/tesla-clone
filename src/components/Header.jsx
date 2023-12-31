import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@mui/icons-material/Close";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import LanguageIcon from "@mui/icons-material/Language";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Header() {
  const [burgerStatus, setBurgerStatus] = useState(0);

  return (
    <Container>
      <a href="#">
        <img src="/images/logo.svg" alt="tesla's logo" />
      </a>

      <Menu>
        <a href="#">Vehicles</a>
        <a href="#">Energy</a>
        <a href="#">Charging</a>
        <a href="#">Discover</a>
        <a href="#">Shop</a>
      </Menu>

      <RightMenu>
        <a href="#">
          <HelpOutlineIcon />
        </a>
        <a href="#">
          <LanguageIcon />
        </a>
        <a href="#">
          <AccountCircleIcon />
        </a>
        <CustomMenu onClick={() => setBurgerStatus(1)} />
      </RightMenu>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CustomCloseIcon onClick={() => setBurgerStatus(0)} />
        </CloseWrapper>

        <li>
          <a href="#">Vehicles</a>
        </li>
        <li>
          <a href="#">Energy</a>
        </li>
        <li>
          <a href="#">Charging</a>
        </li>
        <li>
          <a href="#">Discover</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">Support</a>
        </li>
      </BurgerNav>
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
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 1rem;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(8px);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    padding: 0 10px;
    flex-wrap: nowrap;
    font-size: 1rem;
  }

  a:hover {
    background-color: rgba(255, 255, 255, 0.25);
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    backdrop-filter: blur(8px);
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }
`;

const BurgerNav = styled.div`
  position: fixed;
  z-index: 100;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s ease-in;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CustomCloseIcon = styled(CloseIcon)`
  cursor: pointer;
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
