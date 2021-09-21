import {HttpStatusCode} from '../../../shared/enums'
import {APIError} from '../../../utils/errors'
import {modelEstate} from './estate'
import {IEstate} from './interface'
import {validator} from './validate'

function validate(data: IEstate) {
  const value = validator.validate(data)
  if (value.error) {
    const errMsg = value.error.details.map(el => el.message).join('\n')

    throw new APIError(HttpStatusCode.BAD_REQUEST, errMsg)
  }
  return true
}

const makeEstate = modelEstate(validate)

export {makeEstate}
