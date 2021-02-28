import React from "react";
import PropTypes from "prop-types";

const FoodItem = ({ food: { src, title, html_url } }) => {
  //   const { src, title, html_url } = props.food;
  return (
    <div className="card text-center">
      <img src={src} alt="" className="round-img" style={{ width: "180px" }} />
      <h3>{title}</h3>
      <a href={html_url} className="btn btn-dark btn-sm my-1">
        More
      </a>
    </div>
  );
};
FoodItem.propTypes = {
  food: PropTypes.object.isRequired,
};

export default FoodItem;
