import server from './server.js'

const port = 3000;
server.listen(port, function () {
  console.log('BaseApp listening on port ' + port)
})