import React, { useState } from 'react';
import { foodData } from '../data';

const FilterButton = ({ action, title }) => {
  return (
    <button
      onClick={action}
      className="m-1 border-primary text-primary hover:bg-primary hover:text-white transition duration-300 ease-in-out"
    >
      {title}
    </button>
  );
}

const Food = () => {
  const [foods, setFoods] = useState(foodData);

  const filterType = (category) => {
    setFoods(
      foodData.filter((item) => {
        return item.category === category;
      })
    );
  };

  const filterPrice = (price) => {
    setFoods(
      foodData.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-primary font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="font-bold text-gray-700">Filter Type</p>
          <div className="flex justfiy-between flex-wrap">
            <FilterButton action={() => setFoods(foodData)} title="All" />
            <FilterButton action={() => filterType('burger')} title="Burgers" />
            <FilterButton action={() => filterType('pizza')} title="Pizza" />
            <FilterButton action={() => filterType('salad')} title="Salads" />
            <FilterButton
              action={() => filterType('chicken')}
              title="Chicken"
            />
          </div>
        </div>

        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <FilterButton action={() => filterPrice('$')} title="$" />
            <FilterButton action={() => filterPrice('$$')} title="$$" />
            <FilterButton action={() => filterPrice('$$$')} title="$$$" />
            <FilterButton action={() => filterPrice('$$$$')} title="$$$$" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-300"
          >
            <img
              src={food.image}
              alt={food.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="flex justify-between px-2 py-4">
              <p className="font-bold">{food.name}</p>
              <p>
                <span className="bg-primary text-white py-1 px-2 rounded-full">
                  {food.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;
