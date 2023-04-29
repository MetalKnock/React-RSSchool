import fs from 'node:fs/promises';
import express from 'express';

const PORT = 5173;
const BASE = '/';

const app = express();

const { createServer } = await import('vite');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  base: BASE,
});
app.use(vite.middlewares);

app.use('*', async (req, res) => {
  try {
    const url = req.originalUrl;

    let template = await fs.readFile('./index.html', 'utf-8');
    template = await vite.transformIndexHtml(url, template);

    const [beforeSeparator, afterSeparator] = template.split(`<!--app-html-->`);

    const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
    const { pipe } = await render(url, res, {
      onShellReady() {
        res.write(beforeSeparator);
        pipe(res);
        res.write(afterSeparator);
      },
    });
  } catch (error) {
    if (error instanceof Error) {
      vite.ssrFixStacktrace(error);
      res.status(500).end(error.stack);
    }
  }
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server started at http://localhost:${PORT}`);
});
