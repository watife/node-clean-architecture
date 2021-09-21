import {IEstate} from '../entity/interface'

interface IEstateDb {
  id: string
  name: string
  address: string
}

interface IDataAccess {
  create: (data: IEstate) => Promise<IEstateDb>
  findByNameAndAddress: (data: IEstate) => Promise<IEstateDb | undefined>
}

export {IDataAccess, IEstateDb}
