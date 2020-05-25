const router = require('express').Router()
const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const yaml = require('js-yaml')

const file = fs.readFileSync(global.BASE_PATH + '/static/swagger.yml', 'utf8');
const swaggerDocument = yaml.safeLoad(file);

router.use('/', function (req, res, next) {
  swaggerDocument.host = req.get('host');
  req.swaggerDoc = swaggerDocument;
  next();
}, swaggerUi.serve, swaggerUi.setup());
router.get('/', swaggerUi.setup(swaggerDocument));

module.exports = router;