import pizzaReducer from "./components/reducers/pizzaReducer";
import { createStore } from "redux";

const store = createStore(
  pizzaReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
