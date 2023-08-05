import React from "react";
import styled from "styled-components";

function Section() {
  return (
    <Wrap>
      <TextItem>
        <h1>Model S</h1>
        <p>Order Online for Touchless Delivery</p>
      </TextItem>
      <Buttons>
        <ButtonGroup>
          <LeftButton>Explore Inventory</LeftButton>
          <RightButton>Custom Order</RightButton>
        </ButtonGroup>
        <DownArrow src="/images/down-arrow.svg"></DownArrow>
      </Buttons>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url("/images/model-s.jpg");
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const RightButton = styled.div`
  height: 40px;
  width: 264px;
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  opacity: 0.75;
  font-size: 1rem;
  cursor: pointer;
  margin: 12px;
`;

const LeftButton = styled(RightButton)`
  background-color: #fff;
  opacity: 0.65;
  color: #000;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateArrowDown infinite 1.5s;
`;

const Buttons = styled.div``;
