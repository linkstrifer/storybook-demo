import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Title({ children, type = 'h1' }: TitleProps) {
  return React.createElement(type, {}, children);
}
