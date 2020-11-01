const Koa = require('koa');
const path = require('path');
const cors = require('koa2-cors');
const staticServer = require('koa-static');
const minimist = require('minimist');

const { DIST_PATH } = require('../config/base');

async function start() {
  const app = new Koa();

  const args = minimist(process.argv.slice(2));

  const port = args.p || 3006;

  const root = path.resolve(__dirname, DIST_PATH);

  app.use(
    staticServer(root, {
      index: 'index.html',
      gzip: true,
    })
  );

  app.use(cors());

  app.listen(port, () => {
    console.log(`serverURL: http://localhost:${port}`);
  });
}

start();
