require('dotenv').config()

console.log(process.env.JWT_SECRET)

const server = require('./api/server')

const port = process.env.PORT || 5000

server.listen(port, () => {
  console.log('listening on ' + port)
})
