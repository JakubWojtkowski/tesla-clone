import React from "react";
import styled from "styled-components";
import Section from "./Section";
import cars from "../carInfo.json";

function Home() {
  return (
    <Container>
      {cars.map((car) => {
        return <Section
          key={car.id}
          title={car.title}
          description={car.description}
          image={car.image}
        />;
      })}
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
