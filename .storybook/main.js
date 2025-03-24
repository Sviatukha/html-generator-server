/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)',
    '!../src/examples/assets/**/*',
  ],

  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    {
      name: '@storybook/addon-essentials',
      options: {
        //disabling those buttons from the toolbar as they trigger iframe reloads with our vite setup at the moment
        backgrounds: false,
        grid: false,
        outline: false,
      },
    },
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
  ],

  framework: {
    name: '@storybook/react-vite',
    options: {},
  },

  viteFinal: async (config) => {
    config.build = config.build || {};
    config.build.cssCodeSplit = false;

    return config;
  },

  docs: {},
};

export default config;
