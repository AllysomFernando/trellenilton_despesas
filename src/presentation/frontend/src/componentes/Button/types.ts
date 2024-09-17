import { IconsNames } from '../../hooks/useIcon';

export interface ButtonProps {
  title: string;
  onClick: () => void;
  isLoading?: boolean;
  variant: ButtonVariants;
  icon?: IconsNames;
}

export type ButtonVariants = 'Main' | 'Outline' | 'Danger' | 'Ghost' | 'Home';
