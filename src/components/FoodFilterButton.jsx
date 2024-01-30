import React from 'react'

const FoodFilterButton = ({ action, title }) => {
  return (
    <button
      onClick={action}
      className="m-1 border border-primary text-primary rounded-full px-5 py-1 hover:bg-primary hover:text-white transition duration-300 ease-in-out"
    >
      {title}
    </button>
  );
};

export default FoodFilterButton