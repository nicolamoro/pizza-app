import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dough from "./pages/Dough";
import Ingredients from "./pages/Ingredients";
import Review from "./pages/Review";
import NotFound from "./pages/NotFound";
import Navigationbar from "./components/Navigationbar";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <React.Fragment>
        <Navigationbar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dough" element={<Dough />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/review" element={<Review />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </React.Fragment>
    </Provider>
  );
};

export default App;
