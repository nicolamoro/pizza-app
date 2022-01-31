import React from "react";
import { Navbar } from "react-bootstrap";

const Navigationbar = () => {
  return (
    <Navbar bg="dark" variant="dark" className="sticky-top">
      <Navbar.Brand href="/">
        <i className="material-icons left">local_pizza</i>
        Nikiz Pizza
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <a href="mailto:nikimoro@gmail.com">Contact me</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigationbar;
