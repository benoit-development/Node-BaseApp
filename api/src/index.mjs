import express from 'express';
import routes from './routes.mjs';

const app = express()
app.use('/', routes);
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

const port = 3000;
app.listen(port, function () {
  console.log('BaseApp listening on port ' + port)
})
