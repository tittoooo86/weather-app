import {createText, createBox, BaseTheme} from '@shopify/restyle';

const theme: BaseTheme = {
  colors: {
    primary: '#010D16',
    text: '#555A5D',
    white: '#ffffff',
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      lineHeight: 80,
      fontWeight: '700',
    },
    title: {
      fontSize: 40,
      lineHeight: 40,
      color: 'primary',
    },
    subtitle: {
      fontSize: 24,
      lineHeight: 30,
      color: 'primary',
      fontWeight: 'bold',
    },
    bold: {
      fontSize: 16,
      lineHeight: 24,
      color: 'primary',
      fontWeight: 'bold',
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: 'text',
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Text = createText<Theme>();
export const Box = createBox<Theme>();
export default theme;
