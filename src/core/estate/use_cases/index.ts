import {db} from '../../../databases/pg'
import {makeEstateDb} from '../data_access/pg'
import {IEstate} from '../entity/interface'
import {createEstate} from './create'

interface IEstasteUseCases {
  create: (data: IEstate) => Promise<boolean>
}

const estateDb = makeEstateDb(db)
const create = createEstate(estateDb)

const estateUseCases: IEstasteUseCases = Object.freeze({
  create,
})

export {estateUseCases, IEstasteUseCases}
