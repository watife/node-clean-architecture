import {makeEstate} from '../entity'

describe('Entity test', () => {
  it('should throw an error if the entity properties do not exist', () => {
    const data = {
      name: '',
      address: '',
    }

    expect(() => makeEstate(data)).toThrowError()
  })

  it('should return an object of name and address', () => {
    const data = {
      name: 'Lekki phase 1',
      address: 'Lekki phase 1',
    }

    expect(makeEstate(data)).toStrictEqual(data)
  })
})
