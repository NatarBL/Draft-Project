import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
