/**
 * Dependencies (depends on use-cases)
 */
import {estateUseCases} from '../use_cases'
import {makeCreateEstate} from './controllers'

const createEstate = makeCreateEstate(estateUseCases)

const estateControllers = Object.freeze({
  createEstate,
})

export {estateControllers}
