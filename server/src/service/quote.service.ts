import { pgClient } from '..'
import { PostQuoteInput } from '../schema/quote.schema'

const postQuoteService = async ({
    capability,
    comments,
    email,
    name,
    newsletter,
}: PostQuoteInput) => {
    return await pgClient.query(
        `
    INSERT INTO quote(capability, comments, email, name, newsletter)
    VALUES($1, $2, $3, $4, $5)
    `,
        [capability, comments, email, name, newsletter]
    )
}

export { postQuoteService }
