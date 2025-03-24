import { addons } from '@storybook/manager-api';
import { lightTheme, darkTheme } from './gipperTheme';

const applyTheme = () => {
  //get current theme from main html tag (not the iframe)
  const currentTheme = document.documentElement.getAttribute('data-mode');

  const theme = currentTheme === 'darkMode' ? darkTheme : lightTheme;

  addons.setConfig({ theme });
};

// init theme
applyTheme();

// watch for changes in data-mode attribute for main html tag
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-mode') {
      applyTheme();
    }
  });
});

observer.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['data-mode'],
});
