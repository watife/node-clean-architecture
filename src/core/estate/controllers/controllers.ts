import {HttpStatusCode, Request, Response} from '../../../shared'
import {APIError} from '../../../utils/errors'
import {IEstasteUseCases} from '../use_cases'

function makeCreateEstate(useCases: IEstasteUseCases) {
  return async (req: Request, res: Response) => {
    try {
      const created = await useCases.create(req.body)

      return res.status(HttpStatusCode.OK).json({
        success: created,
      })
    } catch (error) {
      if (error instanceof APIError) {
        return res.status(error.statusCode).json({
          status: error.statusCode,
          message: error.message,
        })
      }
    }
  }
}

export {makeCreateEstate}
