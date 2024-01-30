import React from 'react';
import styles from '../style';

const Hero = () => {
  return (
    <div className={`${styles.container} !py-0`}>
      <div className="max-h-[500px] relative">
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center rounded-2xl">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Feast with <span className="text-primary">Ease</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {' '}
            Taste and <span className="text-primary">Please</span>
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover rounded-2xl"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="/"
        />
      </div>
    </div>
  );
};

export default Hero;
