import React from "react";
import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  const style = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <header style={style} className="header">
      <h3>{text}</h3>
    </header>
  );
}

Header.defaultProps = {
  text: "Feedback-UI",
  bgColor: "rgba(0,0,0,0.9)",
  textColor: "#ff55c3",
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
