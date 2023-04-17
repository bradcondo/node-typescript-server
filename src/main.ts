import http from 'http'

const server = http.createServer((req, res) => {
  console.debug(req)
  res.end('Hello!')
})

server.listen(3000, '0.0.0.0', () => {
  console.log('Started server on 0.0.0.0:3000')
})
