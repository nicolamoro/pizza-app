import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Table, Alert } from "react-bootstrap";
import Jumbotron from "../components/Jumbotron";
import { Link, useNavigate } from "react-router-dom";
import { cleanupOrder } from "../components/actions/pizzaActions";

const Review = () => {
  const [confirmed, setConfirmed] = useState(false);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCheckout = useCallback(() => {
    setConfirmed(true);
  }, []);

  const onRestart = useCallback(() => {
    dispatch(cleanupOrder());
    navigate("/");
  }, [dispatch, navigate]);

  return (
    <>
      <Jumbotron
        title="Review your order"
        subtitle="Are you ready to taste your pizza?"
      />
      <Alert show={confirmed} variant="success">
        <div className="text-center">
          Order confirmed! Your tasty pizza will be delivered as soon as
          possible!
        </div>
      </Alert>
      <div className="w-50 mx-auto text-center">
        <Table striped className="mt-4">
          <tbody>
            <tr>
              <td className="font-weight-bold">Dough type:</td>
              <td className="text-right">
                <Link to="/dough">
                  <Button
                    hidden={confirmed}
                    className="btn-small btn-flat"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <i className="material-icons right">navigate_next</i>
                    EDIT
                  </Button>
                </Link>
              </td>
            </tr>
            {state.selectedDough.name ? (
              <tr>
                <td>{state.selectedDough.name}</td>
                <td className="text-right">
                  {state.selectedDough.price.toFixed(2)}&euro;
                </td>
              </tr>
            ) : (
              ""
            )}
            <tr>
              <td className="font-weight-bold">
                Ingredients ({state.selectedIngredients.length} items):
              </td>
              <td className="text-right">
                <Link to="/ingredients">
                  <Button
                    hidden={confirmed}
                    className="btn-small btn-flat"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    <i className="material-icons right">navigate_next</i>
                    EDIT
                  </Button>
                </Link>
              </td>
            </tr>
            {state.selectedIngredients.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td className="text-right">{item.price.toFixed(2)}&euro;</td>
                </tr>
              );
            })}
            <tr>
              <td className="font-weight-bold text-right">Total:</td>
              <td className="font-weight-bold text-right">
                {state.total.toFixed(2)}&euro;
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className="text-center mt-4">
        <Button hidden={confirmed} className="my-2" onClick={onCheckout}>
          <i className="material-icons left">shopping_cart</i>PROCEED TO
          CHECKOUT
        </Button>
        <Button hidden={!confirmed} className="my-2" onClick={onRestart}>
          <i className="material-icons left">replay</i>RESTART
        </Button>
      </div>
    </>
  );
};

export default Review;
