import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import pizzaHeaderImg from "../images/pizzaHeader.jpg";

const Styles = styled.div`
  .jumbo {
    background: url(${pizzaHeaderImg}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 140px;
    position: relative;
    z-index: -2;
    padding: 0.1rem;
    margin-bottom: 0;
  }

  .overlay {
    background-color: #000;
    opacity: 0.6;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
  }
`;

const Jumbotron = ({ title, subtitle, total }) => (
  <Styles>
    <div className="bg-light rounded-3 jumbo sticky-top">
      <div className="overlay"></div>
      <div
        hidden={!total}
        style={{ position: "absolute", top: "115px", right: "10px" }}
      >
        Total: {total ? total.toFixed(2) : ""}&euro;
      </div>
      <Container>
        <h4 className="text-nowrap">{title}</h4>
        <p>{subtitle}</p>
      </Container>
    </div>
  </Styles>
);

export default Jumbotron;
