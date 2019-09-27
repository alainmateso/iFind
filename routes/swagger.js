import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../api-docs/swagger';

const router = new Router();

router.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default router;
