import {estatesDb} from '../../../databases/memory/estates'
import {IDataAccess} from '../data_access/interfaces'
import {makeEstateDb} from '../data_access/memory'
import {createEstate} from '../use_cases/create'

describe('Use_Cases test', () => {
  let db: IDataAccess
  beforeEach(() => {
    db = makeEstateDb(estatesDb)
  })

  it('return should create new estate', async () => {
    const data = {name: 'lekki', address: 'lekki'}
    const estateCreateUseCase = createEstate(db)

    const result = await estateCreateUseCase(data)

    expect(result).toBeTruthy()
  })

  it('should return an error estate exists', async () => {
    const data = {name: 'lekki', address: 'lekki'}
    const estateCreateUseCase = createEstate(db)

    try {
      await estateCreateUseCase(data)
    } catch (error) {
      expect(error).toHaveProperty('message', 'This estate already exists')
      expect(error).toHaveProperty('statusCode', 400)
    }
  })
})
