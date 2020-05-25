import express from 'express'
import swaggerUi from 'swagger-ui-express'
import fs from 'fs'
import yaml from 'js-yaml'
import appRoot from 'app-root-path'

const router = express.Router()
const file = fs.readFileSync(appRoot + '/static/swagger.yml', 'utf8');
const swaggerDocument = yaml.safeLoad(file);

router.use('/', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());
router.get('/', swaggerUi.setup(swaggerDocument));

export default router;