import React from 'react';

const ServiceCard = ({ title, description }) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-xl p-6 text-center hover:transform hover:scale-105 transition-all duration-300">
      <h3 className="text-2xl font-bold mb-4 text-blue-300">{title}</h3>
      <p className="text-lg">{description}</p>
    </div>
  );
};

export default ServiceCard;