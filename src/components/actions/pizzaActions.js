import {
  SELECT_DOUGH,
  SELECT_INGREDIENT,
  CLEANUP_ORDER,
} from "./action-types/pizza-actions";

// select dough type action
export const selectDough = (id) => {
  return {
    type: SELECT_DOUGH,
    id,
  };
};

// select ingredient action
export const selectIngredient = (id) => {
  return {
    type: SELECT_INGREDIENT,
    id,
  };
};

// cleanup order data
export const cleanupOrder = () => {
  return {
    type: CLEANUP_ORDER,
  };
};
