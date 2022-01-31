import ThickImg from "../images/doughs/thick.png";
import ThinImg from "../images/doughs/thin.png";

export const fetchDoughTypes = () => [
  {
    id: 1,
    name: "Thin",
    description: "Thin and crusty pizza dough",
    image: ThinImg,
    price: 4.0,
  },
  {
    id: 2,
    name: "Thick",
    description: "Thick and soft pizza dough",
    image: ThickImg,
    price: 3.0,
  },
];
