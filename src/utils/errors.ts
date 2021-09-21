import {HttpStatusCode} from '../shared/enums'

class BaseError extends Error {
  public readonly statusCode: HttpStatusCode

  constructor(statusCode: HttpStatusCode, description: string) {
    super(description)
    Object.setPrototypeOf(this, new.target.prototype)

    this.statusCode = statusCode

    Error.captureStackTrace(this)
  }
}

//free to extend the BaseError
class APIError extends BaseError {
  constructor(statusCode = HttpStatusCode.INTERNAL_SERVER, description = 'internal server error') {
    super(statusCode, description)
  }
}

export {APIError}
