import {HttpStatusCode} from '../../../shared/enums'
import {APIError} from '../../../utils/errors'
import {IDataAccess} from '../data_access/interfaces'
import {makeEstate} from '../entity'
import {IEstate} from '../entity/interface'

function createEstate(estateDb: IDataAccess) {
  return async function (data: IEstate) {
    const estate = makeEstate(data)

    const isExisting = await estateDb.findByNameAndAddress(estate)

    if (isExisting) throw new APIError(HttpStatusCode.BAD_REQUEST, 'This estate already exists')

    const newEstate = await estateDb.create(data)

    if (!newEstate) throw new APIError(HttpStatusCode.INTERNAL_SERVER, 'could not create this estate')

    return true
  }
}

export {createEstate}
