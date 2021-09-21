import shortid from 'shortid'
import {IEstate} from '../../entity/interface'
import {IDataAccess, IEstateDb} from '../interfaces'

function makeEstateDb(db: IEstateDb[]): IDataAccess {
  return Object.freeze({
    create,
    findByNameAndAddress,
  })

  async function create(data: IEstate): Promise<IEstateDb> {
    const newEstate = {
      ...data,
      id: shortid.generate(),
    }
    db.push(newEstate)

    return db[db.length - 1]
  }

  async function findByNameAndAddress(data: IEstate): Promise<IEstateDb | undefined> {
    return db.find(dt => dt.name === data.name && dt.address === data.address)
  }
}

export {makeEstateDb}
