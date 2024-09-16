import React from 'react';
import { Icon } from '../Icon';
import { ButtonProps } from './types';
import { useButtonStyles } from '../../hooks/useButtonStyles';

export const Button = ({
  title,
  onPress,
  isLoading = false,
  variant,
  icon,
}: ButtonProps) => {
  const ButtonComponent = useButtonStyles(variant);

  return (
    <ButtonComponent onClick={onPress} disabled={isLoading}>
      {icon && <Icon name={icon} color="white" width={20} height={20} />}
      {isLoading ? <span>...</span> : <span>{title}</span>}
    </ButtonComponent>
  );
};
