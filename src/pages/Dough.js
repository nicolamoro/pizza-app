import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { selectDough } from "../components/actions/pizzaActions";
import DoughCard from "../components/DoughCard";

const DoughCardList = ({ doughts, selectedDough, onSelectDough }) => {
  return doughts.map((dought) => (
    <div className="col" key={dought.id}>
      <DoughCard
        key={dought.id}
        item={dought}
        selected={selectedDough.id === dought.id}
        onSelectDough={onSelectDough}
      />
    </div>
  ));
};

const Dough = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSelectDough = useCallback(
    (id) => {
      dispatch(selectDough(id));
    },
    [dispatch]
  );

  return (
    <div>
      <Jumbotron
        title="Choose your dough type"
        subtitle="Pizza dough has a significant impact on the overall taste and the type of dough used in a recipe will vary."
        total={state.total}
      />
      <div className="text-center mt-4">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 g-4">
          <DoughCardList
            doughts={state.doughts}
            selectedDough={state.selectedDough}
            onSelectDough={onSelectDough}
          />
        </div>
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
