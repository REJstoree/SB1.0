import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ title, children }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 border-b pb-2">
        {title}
      </h2>
      {children}
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Card;
