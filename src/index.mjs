import express from 'express';
import appRoutes from './routes/appRoutes.mjs';
import apiRoutes from './routes/apiRoutes.mjs';

const app = express()
app.use('/api', apiRoutes);
app.use('/app', appRoutes);

const port = 3000;
app.listen(port, function () {
  console.log('BaseApp listening on port ' + port)
})
