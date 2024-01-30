import React, { useEffect, useMemo, useState } from 'react';
import { foodData } from '../data';
import FoodFilterButton from './FoodFilterButton';
import styles from '../style';

const Food = () => {
  const [foods, setFoods] = useState(foodData);

  useEffect(() => {
    const sortedFoodData = [...foodData].sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    setFoods(sortedFoodData);
  }, []);

  const sortedFoodData = useMemo(() => {
    return [...foodData].sort((a, b) => a.name.localeCompare(b.name));
  }, []);

  useEffect(() => {
    setFoods(sortedFoodData);
  }, [sortedFoodData]);

  const filterType = (category) => {
    setFoods(sortedFoodData.filter((item) => item.category === category));
  };

  const filterPrice = (price) => {
    setFoods(sortedFoodData.filter((item) => item.price === price));
  };

  return (
    <div className={styles.container}>
      <h1 className="text-primary font-bold text-4xl text-center">
        Top Rated Menu Items
      </h1>

      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <p className="text-gray-500 mb-2">
            Filter by: <span className="font-bold text-gray-700">Type</span>
          </p>
          <div className="flex justfiy-between flex-wrap">
            <FoodFilterButton
              action={() => setFoods(sortedFoodData)}
              title="All"
            />
            <FoodFilterButton
              action={() => filterType('burger')}
              title="Burgers"
            />
            <FoodFilterButton
              action={() => filterType('pizza')}
              title="Pizza"
            />
            <FoodFilterButton
              action={() => filterType('salad')}
              title="Salads"
            />
            <FoodFilterButton
              action={() => filterType('chicken')}
              title="Chicken"
            />
          </div>
        </div>

        <div>
          <p className="text-gray-500 mb-2">
            Filter by: <span className="font-bold text-gray-700">Price</span>
          </p>
          <div className="flex justify-between max-w-[390px] w-full">
            <FoodFilterButton action={() => filterPrice('$')} title="$" />
            <FoodFilterButton action={() => filterPrice('$$')} title="$$" />
            <FoodFilterButton action={() => filterPrice('$$$')} title="$$$" />
            <FoodFilterButton action={() => filterPrice('$$$$')} title="$$$$" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {foods.map((food) => (
          <div
            key={food.id}
            className="mt-2 border shadow-lg rounded-lg cursor-pointer hover:scale-105 duration-300"
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
