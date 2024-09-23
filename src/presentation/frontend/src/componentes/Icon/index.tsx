import React from 'react';
import { IconsNames, useIcon } from '../../hooks/useIcon';
import { ImgHTMLAttributes } from 'react';

interface IconProps extends ImgHTMLAttributes<HTMLImageElement> {
  name: IconsNames;
  width?: number;
  height?: number;
}

export const Icon = ({ name, width, height, ...rest }: IconProps) => {
  const { getIconByKeyword } = useIcon();
  const iconSrc = getIconByKeyword(name);

  if (!iconSrc) {
    console.error(`Icon '${name}' not found.`);
    return null;
  }

  return (
    <img src={iconSrc} alt={name} width={width} height={height} {...rest} />
  );
};
