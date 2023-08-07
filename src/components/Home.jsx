import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../sectionInfo.json";

function Home() {
  return (
    <Container>
      {cars.map((car) => {
        return (
          <Section
            key={car.id}
            id={car.id}
            title={car.title}
            description={car.description}
            image={car.image}
            leftBtn={car.leftBtn}
            rightBtn={car.rightBtn}
          />
        );
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow: auto;
  overflow-x: hidden;
`;
