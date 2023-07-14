import { Router } from './deps.ts';
import skim from './controllers/skim.ts';
import config from './controllers/config.ts';

const router = new Router();

router
  .get('/skim', skim)
  .get('/config', config);

export default router;
