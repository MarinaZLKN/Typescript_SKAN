import React from 'react';

interface MainPageCenterLogoProps {
  alt: string;
}

const MainPageCenterLogoLogo: React.FC<MainPageCenterLogoProps> = ({ alt }) => {
  return (
    <div className="logo">
      <img src="/Group.png" alt={alt} />
    </div>
  );
};

export default MainPageCenterLogoLogo;