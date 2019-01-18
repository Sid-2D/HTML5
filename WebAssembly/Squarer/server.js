const fs = require('fs'),
      express = require('express'),
      app = express()

express.static(__dirname)

app.use(express.static('./WASM'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.listen(3000, err => {
    console.log('Listening on port 3000...')
})