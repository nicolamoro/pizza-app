import React from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";

const Home = () => (
  <div>
    <Jumbotron
      title="Welcome"
      subtitle="Here you can compose your pizza with your favorite tastes!"
    />
    <div className="text-center mt-4">
      <p>To start composing your awesome pizza click the button:</p>
      <Link to="/dough">
        <Button>
          <i className="material-icons right">navigate_next</i>
          CREATE YOUR PIZZA
        </Button>
      </Link>
    </div>
  </div>
);

export default Home;
