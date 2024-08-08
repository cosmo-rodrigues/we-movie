import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue100: string;
      blue200: string;
      gree100: string;
      grey100: string;
      grey800: string;
      white: string;
    };
  }
}
