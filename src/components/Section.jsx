import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import Footer from "./Footer";

function Section(props) {
  return (
    <Wrap image={props.image}>
      <Fade bottom>
        <TextItem>
          <h1>{props.title}</h1>
          <p>{props.description}</p>
        </TextItem>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{props.leftBtn}</LeftButton>
            {props.rightBtn && <RightButton>{props.rightBtn}</RightButton>}
          </ButtonGroup>
          {props.id === 0 && (
            <DownArrow src="/images/down-arrow.svg"></DownArrow>
          )}
        </Buttons>
      </Fade>
      {props.title === "Accessories" && <Footer />}
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 1.2rem;
  align-items: center;
  text-align: center;
  background-image: ${(props) => `url("/images/${props.image}")`};
  scroll-snap-align: start;
  transition: all 1s ease;
`;

const TextItem = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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
  opacity: 0.85;
  font-size: 1rem;
  cursor: pointer;
  margin: 12px;
`;

const LeftButton = styled(RightButton)`
  background-color: #fff;
  opacity: 0.8;
  color: #000;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow-x: hidden;
  animation: animateArrowDown infinite 1.5s;
`;

const Buttons = styled.div``;
