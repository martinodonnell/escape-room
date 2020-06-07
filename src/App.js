import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import ItemContextProvider from "./context/ItemContextProvider";

import Root from "./components/Root";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <ItemContextProvider>
        <BrowserRouter>
          <Root />
        </BrowserRouter>
      </ItemContextProvider>
    </div>
  );
};

export default App;
