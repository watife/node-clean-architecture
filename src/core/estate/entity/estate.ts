import {IEstate} from './interface'

const modelEstate = (validate: {(data: IEstate): boolean; (arg0: IEstate): void}) => {
  return function makeEstate(data: IEstate): Readonly<IEstate> {
    data.name = data?.name.trim().toLowerCase()
    data.address = data?.address.trim().toLowerCase()

    validate(data)

    return Object.freeze(data)
  }
}

export {modelEstate}
