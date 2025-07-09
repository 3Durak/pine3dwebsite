import React from 'react';

interface Pine3DLogoProps {
  className?: string;
  style?: React.CSSProperties;
}

const Pine3DLogo: React.FC<Pine3DLogoProps> = ({ className, style }) => (
  <svg
    className={className}
    style={style}
    width="64"
    height="64"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Çam ağacı */}
    <polygon points="32,6 12,38 22,38 10,58 32,46 54,58 42,38 52,38" fill="#1b5e20" stroke="#145016" strokeWidth="2"/>
    {/* 3D harfleri */}
    <text x="32" y="60" textAnchor="middle" fontFamily="Poppins, Arial, sans-serif" fontWeight="bold" fontSize="18" fill="#ffb300" letterSpacing="2">3D</text>
  </svg>
);

export default Pine3DLogo; 