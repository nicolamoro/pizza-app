import {
  SELECT_DOUGH,
  SELECT_INGREDIENT,
  CLEANUP_ORDER,
} from "../actions/action-types/pizza-actions";
import { fetchDoughTypes } from "../../providers/doughs";
import { fetchIngredients } from "../../providers/ingredients";

const initState = {
  doughts: fetchDoughTypes(),
  ingredients: fetchIngredients(),
  selectedDough: {},
  selectedIngredients: [],
  total: 0,
};

const recalculateTotal = (selectedDough = {}, selectedIngredients = []) => {
  let total = 0;

  if (selectedDough && selectedDough.price) {
    total += selectedDough.price;
  }

  total += selectedIngredients.reduce((total, actual) => {
    return total + actual.price;
  }, 0);

  return total;
};

const pizzaReducer = (state = initState, action) => {
  if (action.type === SELECT_DOUGH) {
    const selectedDough = state.doughts.find((d) => d.id === action.id);

    return {
      ...state,
      selectedDough: selectedDough,
      total: recalculateTotal(selectedDough, state.selectedIngredients),
    };
  } else if (action.type === SELECT_INGREDIENT) {
    const selectedIngredient = state.ingredients.find(
      (i) => i.id === action.id
    );
    const existingIngredient = state.selectedIngredients.find(
      (i) => i.id === action.id
    );

    if (existingIngredient) {
      const newSelectedIngredients = state.selectedIngredients.filter(
        (i) => action.id !== i.id
      );
      return {
        ...state,
        selectedIngredients: newSelectedIngredients,
        total: recalculateTotal(state.selectedDough, newSelectedIngredients),
      };
    } else {
      const newSelectedIngredients = [
        ...state.selectedIngredients,
        selectedIngredient,
      ];
      return {
        ...state,
        selectedIngredients: newSelectedIngredients,
        total: recalculateTotal(state.selectedDough, newSelectedIngredients),
      };
    }
  } else if (action.type === CLEANUP_ORDER) {
    return {
      ...state,
      selectedDough: {},
      selectedIngredients: [],
      total: 0,
    };
  } else {
    return state;
  }
};

export default pizzaReducer;
