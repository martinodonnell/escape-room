import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";

import Root from "./components/Root";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </div>
  );
};

export default App;
