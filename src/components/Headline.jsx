import React from 'react';
import { headlineData } from '../data';
import HeadlineCard from './HeadlineCard';
import styles from '../style';

const Headline = () => {
  return (
    <div className={`${styles.container} grid md:grid-cols-3 gap-6`}>
      {headlineData.map((item) => (
        <HeadlineCard key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Headline;
