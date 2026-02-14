import React from 'react';

const Globe = ({ size = 20, color = "black" }) => {
  return (
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 20" 
      fill="none" 
      stroke={color} 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    >
      {/* The main envelope rectangle */}
      <rect x="2" y="4" width="20" height="16" rx="2" />
      {/* The 'V' shape for the envelope flap */}
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
};

export default Globe;