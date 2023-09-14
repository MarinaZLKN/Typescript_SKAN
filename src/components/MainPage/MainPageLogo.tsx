import React from 'react';

interface MainPageLogoProps {
  alt: string;
}

const FooterLogo: React.FC<MainPageLogoProps> = ({ alt }) => {
  return (
    <div className="logo">
      <img src="/2398.png" alt={alt} />
    </div>
  );
};

export default FooterLogo;