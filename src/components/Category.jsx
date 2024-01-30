import React from 'react';
import { categories } from '../data';
import styles from '../style';

const Category = () => {
  return (
    <div className={styles.container}>
      <h1 className="text-primary font-bold text-4xl text-center">
        Menu Categories
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
        {categories.map((item, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded-lg border shadow-md cursor-pointer p-4 flex justify-between items-center hover:scale-105 duration-300"
          >
            <h2 className="font-bold sm:text-xl">{item.name}</h2>
            <img src={item.image} alt={item.name} className="w-20" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
