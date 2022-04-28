import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class Navbar extends React.Component {
  render() {
    return (
      <header className="shadow-lg border-b-2 border-teal-500 py-5">
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="text-xl">Greeting App</Link>
          <nav>
            <Link to="/greetings" className="py-2 px-6 bg-teal-500 rounded-md text-white">Greetings</Link>
          </nav>
        </div>
      </header>
    );
  }
}

export default Navbar;
