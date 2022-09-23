const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db/index')
const temperatureRouter = require('./routes/tempRouter')

const app = express()
const apiPort = 5000

const sub = require('./sub');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api', temperatureRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))