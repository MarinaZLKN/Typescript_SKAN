import React from 'react';

interface SliderCardProps {
  date: string;
  total: number;
  risk: number;
}

const SliderCard: React.FC<SliderCardProps> = ({ date, total, risk }) => {
  return (
    <div className="table">
      <div className="table-tr">
        <div className="table-value">{date}</div>
      </div>
      <div className="table-tr">
        <div className="table-value">{total}</div>
      </div>
      <div className="table-tr">
        <div className="table-value">{risk}</div>
      </div>
      <div className="separator_stat"></div>
    </div>
  );
};

export default SliderCard;