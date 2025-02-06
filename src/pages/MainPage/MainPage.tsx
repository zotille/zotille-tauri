import React from 'react';
;

export interface MainPageProps {
  className?: string;
  style?: React.CSSProperties;
}

export const MainPage: React.FC<MainPageProps> = ({className, style}) => {
  return <div className="">content</div>;
}
