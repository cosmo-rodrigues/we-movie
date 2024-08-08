import { ComponentProps } from '../../types';

interface HeroComponentProps extends ComponentProps {}
export const HeroComponent = ({ children }: HeroComponentProps) => {
  return <main>{children}</main>;
};
