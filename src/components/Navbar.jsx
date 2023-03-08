import React from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar__container">
      <Link to="/womens" className="navbar__container-link">
        Gems Of Life
      </Link>
    </div>
  );
};

export default Navbar;
