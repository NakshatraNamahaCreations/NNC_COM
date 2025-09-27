import React from 'react';
import { Card } from 'react-bootstrap';
import "@/styles/ShimmerCard.css"// We'll create this CSS file

const ShimmerCard = ({ 
  height = '300px', 
  width = '100%', 
  borderRadius = '0.375rem',
  className = '' 
}) => {
  return (
    <Card 
      className={`shimmer-card ${className}`}
      style={{ 
        height, 
        width, 
        borderRadius,
        overflow: 'hidden'
      }}
    >
      <div className="shimmer-card-image"></div>
      
      <Card.Body className="shimmer-card-body">
        <div className="shimmer-line shimmer-title"></div>
        <div className="shimmer-line shimmer-text"></div>
        <div className="shimmer-line shimmer-text"></div>
        <div className="shimmer-line shimmer-text-short"></div>
        
        <div className="shimmer-card-footer">
          <div className="shimmer-button"></div>
          <div className="shimmer-price"></div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ShimmerCard;