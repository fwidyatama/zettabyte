import { Router } from 'express';
import glob from 'glob';

const router = Router();

glob
  .sync(`${__dirname}/../modules/*/route.js`.replace(/\\/g, '/'))
  .forEach(async (routeFile) => {
    const routeModule = await import(routeFile);
    router.use(routeModule.default);
  });

export default router;
