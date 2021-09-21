import {NODE_ENV} from '../../config'

import knexConfigs from '../../knexfile'

const environment = NODE_ENV || 'development'
const knexConfig = knexConfigs[environment]

const db = require('knex')(knexConfig)

export {db}
