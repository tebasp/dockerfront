const express = require('express')

const app = express()

app.get('/', function (req, res) {
  res.json({
    status: 'ok',
  })
})

app.listen(3000, '0.0.0.0', function () {
  console.log('Server is listening in port 3000')
})
