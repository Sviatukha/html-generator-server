// src/server.js (микрофронтенд)
import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());

async function startServer() {
  // Создаем экземпляр Vite для загрузки JSX
  const { createServer } = await import('vite');
  const vite = await createServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  // Используем Vite middleware
  app.use(vite.middlewares);

  app.get('/', (req, res) => {
    console.log('get /');
    res.send('Hello World');
  });

  // API для рендеринга компонентов
  app.post('/render', async (req, res) => {
    try {
      console.log('Получен запрос:', req.body);
      const reqJSON = req.body || {};

      // Используем vite.ssrLoadModule для загрузки JSX
      const componentModule = await vite.ssrLoadModule(
        `/src/pages/${reqJSON.type}/${reqJSON.name}.jsx`
      );
      const Component = componentModule.default;

      if (!Component) {
        return res.status(404).json({
          error: `Компонент ${reqJSON.name} не найден`,
        });
      }

      const componentHTML = renderToString(
        React.createElement(Component, { content: reqJSON.content } || {})
      );

      const pageContent = `
        <!doctype html>
        <html lang="en">
          <head>
            <meta charset="UTF-8" />
            <link rel="icon" type="image/svg+xml" href="/vite.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Vite + React</title>
          </head>
          <body>
            <div id="root">
              ${componentHTML}
            </div>
          </body>
        </html>
        `;

      res.json({
        message: 'HTML saved',
        html: `${pageContent}`,
      });
    } catch (error) {
      console.error('Ошибка рендеринга:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Статические ресурсы
  app.use('/assets', express.static(path.resolve(__dirname, '../dist/assets')));

  return app;
}

startServer().then((app) => {
  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () => {
    console.log(`Микрофронтенд запущен на порту ${PORT}`);
  });
});
