import React from "react";
import { Button, Card } from "react-bootstrap";

const IngredientCard = ({ item, selected, onSelectIngredient }) => (
  <Card key={item.id} className="rounded text-left" style={{ width: "18rem" }}>
    <Card.Img
      variant="top"
      src={item.image}
      style={{ height: "10rem", objectFit: "cover" }}
    />
    <div
      hidden={!selected}
      className="float-right btn-floating waves-effect waves-light green mt-2 mr-2"
    >
      <i className="material-icons">check</i>
    </div>
    <Card.Body>
      <Card.Title>{item.name}</Card.Title>
      <Card.Text>{item.description}</Card.Text>
    </Card.Body>
    <Card.Footer>
      <span>
        <Button
          className="stretched-link"
          onClick={() => {
            onSelectIngredient(item.id);
          }}
        >
          <i className="material-icons left">add</i>Add
        </Button>
      </span>
      <span className="float-right">
        Price:{" "}
        <span className="font-weight-bold">{item.price.toFixed(2)}&euro;</span>
      </span>
    </Card.Footer>
  </Card>
);

export default IngredientCard;
