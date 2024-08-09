import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      blue100: string;
      blue200: string;
      green100: string;
      grey50: string;
      grey100: string;
      grey700: string;
      grey800: string;
      white: string;
    };
  }
}
