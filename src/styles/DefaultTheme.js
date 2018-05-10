/* @flow */

import color from 'color';
import { indigo500, pinkA200, black, white, grey50 } from './colors';
import fonts from './fonts';

export default {
  dark: false,
  roundness: 4,
  colors: {
    primary: indigo500,
    accent: pinkA200,
    background: grey50,
    surface: white,
    error: '#B00020',
    text: black,
    disabled: color(black)
      .alpha(0.26)
      .rgb()
      .string(),
    placeholder: color(black)
      .alpha(0.38)
      .rgb()
      .string(),
  },
  fonts,
};
