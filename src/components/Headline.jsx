import React from 'react';

const HeadlineCard = ({ title, desc, img }) => {
  return (
    <div className="rounded-xl relative">
      <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
        <p className="font-bold text-2xl px-4 pt-4">{title}</p>
        <p className="px-4">{desc}</p>
        <button className="border-white bg-white text-black mx-4 absolute bottom-4">
          Order Now
        </button>
      </div>
      <img
        className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
        src={img}
        alt="/"
      />
    </div>
  );
};

const Headline = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      <HeadlineCard
        title="Sun's Out, BOGO's Out"
        desc="Through 8/26"
        img="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <HeadlineCard
        title="New Restaurants"
        desc="Added Daily"
        img="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
      />
      <HeadlineCard
        title="We Deliver Desserts Too"
        desc="Tasty Treats"
        img="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
      />
    </div>
  );
};

export default Headline;
