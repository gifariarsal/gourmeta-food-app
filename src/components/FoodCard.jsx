import React from 'react';

const FoodCard = ({ image, name, price }) => {
  return (
    <div className="mt-2 border shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-300">
      <img
        src={image}
        alt={name}
        className="w-full h-[200px] object-cover rounded-t-lg"
      />
      <div className="flex justify-between px-2 py-4">
        <p className="font-bold">{name}</p>
        <p>
          <span className="bg-primary text-white py-1 px-2 rounded-full">
            {price}
          </span>
        </p>
      </div>
    </div>
  );
};

export default FoodCard;
