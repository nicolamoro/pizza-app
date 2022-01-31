import FrenchFriesImg from "../images/ingredients/frenchfries.jpg";
import HamImg from "../images/ingredients/ham.jpg";
import MozzarellaImg from "../images/ingredients/mozzarella.jpg";
import MushroomsImg from "../images/ingredients/mushrooms.jpg";
import OnionImg from "../images/ingredients/onion.jpg";
import PepperImg from "../images/ingredients/pepper.jpg";
import SalamiImg from "../images/ingredients/salami.jpg";
import SausageImg from "../images/ingredients/sausage.png";
import TomatoImg from "../images/ingredients/tomato.jpg";
import WurstelImg from "../images/ingredients/wurstel.jpg";

export const fetchIngredients = () => [
  {
    id: 1,
    name: "French Fries",
    description:
      "French fries or simply fries or chips, are pieces of potato that have been deep-fried. ... These are deep-fried, very thin, salted slices of potato that are usually served at room temperature.",
    image: FrenchFriesImg,
    price: 1.0,
  },
  {
    id: 2,
    name: "Ham",
    description:
      "Ham is pork from a leg cut that has been preserved by wet or dry curing, with or without smoking.",
    image: HamImg,
    price: 1.5,
  },
  {
    id: 3,
    name: "Mozzarella",
    description:
      "Mozzarella cheese is a sliceable curd cheese originating in Italy. Traditional Mozzarella cheese is made from milk of water buffalos herded in very few countries such as Italy and Bulgaria.",
    image: MozzarellaImg,
    price: 0.5,
  },
  {
    id: 4,
    name: "Mushrooms",
    description:
      "A mushroom, or toadstool, is the fleshy, spore-bearing fruiting body of a fungus, typically produced above ground, on soil, or on its food source.",
    image: MushroomsImg,
    price: 0.5,
  },
  {
    id: 5,
    name: "Onion",
    description:
      "Onion, Allium cepa, is an herbaceous biennial in the family Liliaceae grown for its edible bulb. The stem of the plant is a flattened disc at the base and the tubular leaves form a pseudostem where their sheaths overlap.",
    image: OnionImg,
    price: 0.5,
  },
  {
    id: 6,
    name: "Pepper",
    description:
      "Pepper or black pepper is the dried unripe fruit grown in the plant called piper nigrum. It's pungent smell, peppery/hot taste and health friendly properties make pepper a favorite spice all over the world and it is commonly used in all cuisines.",
    image: PepperImg,
    price: 0.5,
  },
  {
    id: 7,
    name: "Salami",
    description:
      "Salami is a type of cured sausage consisting of fermented and air-dried meat, typically pork.",
    image: SalamiImg,
    price: 2.0,
  },
  {
    id: 8,
    name: "Sausage",
    description:
      "Sausages are a meat product usually made from ground meat, often pork, beef, or poultry, along with salt, spices and other flavourings.",
    image: SausageImg,
    price: 1.5,
  },
  {
    id: 9,
    name: "Tomato",
    description:
      "Tomato is an herbaceous annual in the family Solanaceae grown for its edible fruit. The plant can be erect with short stems or vine-like with long, spreading stems.",
    image: TomatoImg,
    price: 0.5,
  },
  {
    id: 10,
    name: "Wurstel",
    description:
      "A Vienna sausage is a thin parboiled sausage traditionally made of pork and beef in a casing of sheep's intestine, then given a low temperature smoking.",
    image: WurstelImg,
    price: 1.0,
  },
];
