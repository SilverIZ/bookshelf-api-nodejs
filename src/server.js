/* eslint-disable no-console */
/* eslint linebreak-style: [2, "windows"] */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const servers = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  servers.route(routes);

  await servers.start();
  console.log(`Server sedang berjalan di ${servers.info.uri}`);
};

init();
