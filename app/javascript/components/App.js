import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import Home from "./Home";

class App extends React.Component {
  render() {
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greetings" element={<Greeting />} />
          </Routes>
        </BrowserRouter>
      </>
    );
  }
}

export default App;
