import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
const morgan = require('morgan')

/**
 * app routes
 */
import {estateRouter} from '../../core/estate/routes'

const app = express()
const PORT = process.env.PORT || 4000
app.use(express.json())
app.use(helmet())
app.use(cors())
app.use(morgan('dev'))

app.listen(PORT, () => {
  console.log(`app is listening on port: ${PORT}`)
})

app.use('/api/v1/estates/', estateRouter)
