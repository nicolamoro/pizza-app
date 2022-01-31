import React from "react";
import { Jumbotron as Jumbo, Container } from "react-bootstrap";
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
    <Jumbo fluid className="jumbo sticky-top">
      <div className="overlay"></div>
      <Container>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </Container>
      <div hidden={!total} className="float-right mr-3">
        Total: {total ? total.toFixed(2) : ""}&euro;
      </div>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
