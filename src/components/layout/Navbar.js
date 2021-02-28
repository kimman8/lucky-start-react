import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  const { icon, title } = props;
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={icon}></i> {title}
      </h1>
    </nav>
  );
};
Navbar.defaultProps = {
  icon: "fab fa-airbnb",
  title: "cuntz",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
export default Navbar;
