import { z } from 'zod'

const QuoteSchema = z.object({
    body: z.object({
        name: z.string(),
        email: z.string(),
        capability: z.string(),
        comments: z.string(),
        newsletter: z.boolean(),
    }),
})

export type PostQuoteInput = z.infer<typeof QuoteSchema>['body']

export default QuoteSchema
