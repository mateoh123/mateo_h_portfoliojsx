import React from "react";
import cx from "classnames";
import { NavLink, Link } from "react-router-dom";

import Panel from "./Panel";

const Navbar = () => {

  return (
    <Panel className="sticky top-0 flex flex-row items-start w-full justify-between bg-stone-950! font-source_san_3 font-bold border-none rounded-none">
      <Link to="/" className="bg-stone-950!">
        {" "}
        Mateo Hernandez
      </Link>
      <div className="flex flex-row gap-5">
        <Link to="/work" className="bg-stone-950!">
          Work
        </Link>
        <Link to="/contact" className="bg-stone-950!">
          Contact
        </Link>
      </div>
    </Panel>
  );
};

export default Navbar;
