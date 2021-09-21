import {IDb} from '../../../../shared/interfaces'
import {IEstate} from '../../entity/interface'
import {IDataAccess, IEstateDb} from '../interfaces'

function makeEstateDb(db: IDb): IDataAccess {
  return Object.freeze({
    create,
    findByNameAndAddress,
  })

  async function create(data: IEstate) {
    return await db<IEstateDb>('estates')
      .insert(data)
      .returning('*')
      .then(result => result[0])
  }

  async function findByNameAndAddress(data: IEstate) {
    return await db<IEstateDb>('estates').where({name: data.name, address: data.address}).first()
  }
}

export {makeEstateDb}
