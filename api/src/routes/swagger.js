import express from 'express'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import yaml from 'js-yaml'
import path from 'path'

const router = express.Router()
const file = fs.readFileSync(path.join(process.cwd(), 'static/swagger.yml'), 'utf8');
const swaggerDocument = yaml.safeLoad(file);

router.use('/', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;