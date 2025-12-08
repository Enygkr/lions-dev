const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hellow World!')
})

app.listen(port, () => {
    console.log('Exemple app listenign on port ${port}')
})