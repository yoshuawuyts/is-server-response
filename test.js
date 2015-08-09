const test = require('tape')
const http = require('http')
const nets = require('nets')

const isRes = require('./')

test('check if value is server res', function (t) {
  t.plan(1)
  const server = http.createServer(function (req, res) {
    t.ok(isRes(res), 'true')
    res.end()
    server.close()
  })

  server.listen()

  const port = server.address().port
  nets('http://localhost:' + port)
})
