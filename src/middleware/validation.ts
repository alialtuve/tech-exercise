import { body, validationResult } from 'express-validator'
import { StatusCodes } from 'http-status-codes'

class ServerError extends Error {
  statusCode: StatusCodes
  constructor(message:string) {
    super(message)
    this.name= 'BadRequestError'
    this.statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  }
}

const handlingErrorsValidation = (values:any) => {
  return [
    values,
    (req: Request, res: any, next: any) => {
      const result = validationResult(req).array({onlyFirstError: true})
      console.log('result',result);
      if(result.length !== 0){
        const { msg } = result[0] 
        res.status(400).send({ error: msg})
      }
      next()
    }
  ]
}

export const validateInputs = handlingErrorsValidation([
  body('name').notEmpty().withMessage('Field name is required'),
  body('favoriteFood').notEmpty().withMessage('Field favoriteFood is required')
])
