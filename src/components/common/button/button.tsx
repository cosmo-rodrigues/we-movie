import { ReactElement } from 'react';
import { Button, ButtonTitle, IconContainer } from './style';

interface ButtonProps {
  itemsCount?: number;
  hasIcon: boolean;
  icon?: ReactElement;
  onClick: () => void;
  shouldChangeColor: boolean;
  title: string;
}

export const ButtonComponent = ({
  itemsCount,
  shouldChangeColor = false,
  hasIcon = false,
  icon,
  onClick,
  title,
}: ButtonProps) => {
  return (
    <Button
      hasIcon={hasIcon}
      shouldChangeColor={shouldChangeColor}
      onClick={onClick}
    >
      {hasIcon && icon && (
        <IconContainer>
          {icon}
          <span>{itemsCount}</span>
        </IconContainer>
      )}
      <ButtonTitle>{title}</ButtonTitle>
    </Button>
  );
};
