import {Router} from 'express'

/**
 * Dependencies {controllers}
 */
import {estateControllers} from '../controllers'

const estateRouter = Router()

estateRouter.post('/', estateControllers.createEstate)

export {estateRouter}
