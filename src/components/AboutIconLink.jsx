import React from "react";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";

function AboutIconLink() {
  return (
    <div className="abt-icon">
      <Link to="/about">
        <FaQuestion size={30} />
      </Link>
    </div>
  );
}

export default AboutIconLink;
