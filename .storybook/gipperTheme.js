import { create } from '@storybook/theming/create';

export const lightTheme = create({
  base: 'light',
  brandTitle: 'Gipper Storybook',
  brandUrl: 'https://mediatest.d1zwsx1ysz8d8y.amplifyapp.com/',
  brandImage:
    'https://dzfa1uifb0sb6.cloudfront.net/stock_images/light_mode_gipper_logo.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"PoppinsBold", sans-serif',
  fontCode: 'monospace',

  colorPrimary: '#25a328', // gipper_green
  colorSecondary: '#717f8e', // gray_50

  // UI
  appBg: '#ffffff', // white_100
  appContentBg: '#f1f2f4', // gray_95
  appPreviewBg: '#e3e6e8', // gray_90
  appBorderColor: '#e3e6e8', // gray_90
  appBorderRadius: 4,

  // Text colors
  textColor: '#171a1c', // gray_10
  textInverseColor: '#ffffff', // white_100

  // Toolbar default and active colors
  barTextColor: '#5b6671', // gray_40
  barSelectedColor: '#25a328', // gipper_green
  barHoverColor: '#C6CCD2', // gray_80
  barBg: '#f1f2f4', // gray_95

  // Form colors
  inputBg: '#ffffff', // white_100
  inputBorder: '#e3e6e8', // gray_90
  inputTextColor: '#171a1c', // gray_10
  inputBorderRadius: 4,
});

export const darkTheme = create({
  base: 'dark',
  brandTitle: 'Gipper Storybook Dark',
  brandUrl: 'https://mediatest.d1zwsx1ysz8d8y.amplifyapp.com/',
  brandImage:
    'https://dzfa1uifb0sb6.cloudfront.net/stock_images/light_mode_gipper_logo.png',
  brandTarget: '_self',

  // Typography
  fontBase: '"PoppinsBold", sans-serif',
  fontCode: 'monospace',

  colorPrimary: '#25a328', // gipper_green
  colorSecondary: '#717f8e', // gray_50

  // UI
  appBg: '#171a1c', // gray_10
  appContentBg: '#2d3339', // gray_20
  appPreviewBg: '#2d3339', // gray_20
  appBorderColor: '#5b6671', // gray_40
  appBorderRadius: 4,

  // Text colors
  textColor: '#ffffff', // white_100
  textInverseColor: '#171a1c', // gray_10

  // Toolbar default and active colors
  barTextColor: '#c6ccd2', // gray_80
  barSelectedColor: '#25a328', // gipper_green
  barHoverColor: '#717f8e', // gray_50
  barBg: '#2d3339', // gray_20

  // Form colors
  inputBg: '#2d3339', // gray_20
  inputBorder: '#5b6671', // gray_60
  inputTextColor: '#ffffff', // white_100
  inputBorderRadius: 4,
});
