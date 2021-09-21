import Joi from '@hapi/joi'

const validator = Joi.object({
  name: Joi.string().required(),
  address: Joi.string().required(),
}).options({abortEarly: false})

export {validator}
