import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, CardColumns } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { selectIngredient } from "../components/actions/pizzaActions";
import IngredientCard from "../components/IngredientCard";

const IngredientCardList = ({
  ingredients,
  selectedIngredients,
  onSelectIngredient,
}) => {
  return ingredients.map((ingredient) => (
    <IngredientCard
      key={ingredient.id}
      item={ingredient}
      selected={selectedIngredients.find((i) => i.id === ingredient.id)}
      onSelectIngredient={onSelectIngredient}
    />
  ));
};

const Ingredients = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const onSelectIngredient = (id) => {
    dispatch(selectIngredient(id));
  };

  return (
    <div>
      <Jumbotron
        title="Add your toppings"
        subtitle=" What are the best pizza toppings? When it comes to pizza, everyone has an opinion."
        total={state.total}
      />
      <div className="text-center mt-4">
        <CardColumns>
          <IngredientCardList
            ingredients={state.ingredients}
            selectedIngredients={state.selectedIngredients}
            onSelectIngredient={onSelectIngredient}
          />
        </CardColumns>
        <Link to="/review">
          <Button className="my-2">
            <i className="material-icons right">navigate_next</i>REVIEW YOUR
            CHOICES
          </Button>
        </Link>
        <br />
      </div>
    </div>
  );
};

export default Ingredients;
