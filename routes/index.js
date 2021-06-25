import { Router } from 'express';

import error from './error.js';
import getFileStream from './getFileStream.js';
import getHello from './getHello.js';
import getPayload from './getPayload.js';
import notFound from './notFound.js';

export default () => {
  const router = new Router();

  router.get('/file-stream', getFileStream);
  router.get('/hello', getHello);
  router.get('/payload', getPayload);
  router.use(notFound);
  router.use(error);

  return router;
};
