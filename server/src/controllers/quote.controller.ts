import { Request, Response } from 'express'
import { PostQuoteInput } from '../schema/quote.schema'
import { postQuoteService } from '../service/quote.service'

const postQuoteHandler = async (
    req: Request<{}, {}, PostQuoteInput>,
    res: Response
) => {
    const postQuoteInput = req.body
    await postQuoteService(postQuoteInput)
    return res.status(200).send({
        message: 'quote sucessfully posted',
    })
}

export { postQuoteHandler }
