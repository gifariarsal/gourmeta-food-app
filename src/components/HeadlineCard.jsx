import React from 'react'
import styles from '../style';

const HeadlineCard = ({ title, desc, img }) => {
  return (
    <div className="rounded-xl relative">
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-4 pt-4">{title}</p>
        <p className="px-4">{desc}</p>
        <button className={`${styles.buttonAnimated} absolute bottom-4 right-4`}>
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={img}
        alt={title}
      />
    </div>
  );
}

export default HeadlineCard