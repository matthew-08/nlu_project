import { NextFunction, Request, Response } from 'express'
import { AnyZodObject } from 'zod'

const validateSchema =
    (zSchema: AnyZodObject) =>
    (req: Request, res: Response, next: NextFunction) => {
        try {
            zSchema.parse({
                body: req.body,
            })
            next()
        } catch (error) {
            return res.status(400).send()
        }
    }
export default validateSchema
