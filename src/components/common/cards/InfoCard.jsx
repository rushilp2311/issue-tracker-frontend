import React from 'react';
import { FiInfo } from 'react-icons/fi';

function InfoCard({ text }) {
  return (
    <div className="card__container info">
      <span>
        <FiInfo className="image" />
      </span>
      <span>{text}</span>
    </div>
  );
}

export default InfoCard;
