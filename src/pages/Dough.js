import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CardColumns } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { selectDough } from "../components/actions/pizzaActions";
import DoughCard from "../components/DoughCard";

const DoughCardList = ({ doughts, selectedDough, onSelectDough }) => {
  return doughts.map((dought) => (
    <DoughCard
      key={dought.id}
      item={dought}
      selected={selectedDough.id === dought.id}
      onSelectDough={onSelectDough}
    />
  ));
};

const Dough = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSelectDough = (id) => {
    dispatch(selectDough(id));
  };

  return (
    <div>
      <Jumbotron
        title="Choose your dough type"
        subtitle="Pizza dough has a significant impact on the overall taste and the type of dough used in a recipe will vary."
        total={state.total}
      />
      <div className="text-center mt-4">
        <CardColumns>
          <DoughCardList
            doughts={state.doughts}
            selectedDough={state.selectedDough}
            onSelectDough={onSelectDough}
          />
        </CardColumns>
        <Link to="/ingredients">
          <Button disabled={!state.selectedDough.id} className="my-2">
            <i className="material-icons right">navigate_next</i>CHOOSE YOUR
            FAVORITE TOPPINGS
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Dough;
