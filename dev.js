import { build, preview } from 'vite';

let previewServer;

build({ build: { watch: {} } }).then((buildWatcher) => {
  buildWatcher.on('event', async ({ code }) => {
    if (code === 'END') {
      previewServer =
        previewServer || (await preview({ preview: { port: 5101 } }));

      console.log('\n');
      previewServer.printUrls();
    }
  });
});
