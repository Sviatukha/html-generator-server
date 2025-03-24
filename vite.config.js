import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';
import process from 'process';

import packageJson from './package.json';

const { version } = packageJson;
const branchName = 'main';

const awsLinks = () => {
  return {
    libModule: `https://dzfa1uifb0sb6.cloudfront.net/builds-store/lib-module/v${version}/assets/remoteEntry.js`,
  };
};

const stagingLinks = () => {
  return {
    libModule: `https://dzfa1uifb0sb6.cloudfront.net/build-store-beta/staging/lib-module/${branchName}/assets/remoteEntry.js`,
  };
};

const staging2Links = () => {
  return {
    libModule: `https://dzfa1uifb0sb6.cloudfront.net/build-store-beta/staging-2/lib-module/${branchName}/assets/remoteEntry.js`,
  };
};

const devLinks = () => {
  return {
    // libModule: 'http://localhost:5003/assets/remoteEntry.js',
    libModule: `https://${branchName}.d2f9dlll2utalu.amplifyapp.com/assets/remoteEntry.js`,
  };
};

const remotes = {
  production: awsLinks(),
  staging: stagingLinks(),
  'staging-2': staging2Links(),
  dev: devLinks(),
};

export default defineConfig(() => {
  const buildENV = process.env.BUILD_ENV || 'dev';

  return {
    plugins: [
      react(),
      federation({
        name: 'uiModule',
        filename: 'remoteEntry.js',
        exposes: {
          TestHome: './src/pages/home/TestHome.jsx',
        },
        // remotes: remotes[buildENV],
        shared: ['react', 'react-dom', 'react-router-dom'],
      }),
    ],
    build: {
      emptyOutDir: true,
      modulePreload: false,
      target: 'esnext',
      cssCodeSplit: false,
    },
  };
});
