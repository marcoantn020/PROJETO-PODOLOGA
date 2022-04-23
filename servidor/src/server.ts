import express from 'express'
import routes from './routes'
import 'reflect-metadata'
import './database'

const cors = require('cors')

const port = 4500
const app = express()
app.use(cors())
routes(app)

app.listen(port, () => console.log(`Server running on port ${port}`))