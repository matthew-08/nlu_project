import { z } from 'zod';

const QuoteSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  capability: z.string(),
  comments: z.string().max(255),
  newsletter: z.boolean(),
});

export default QuoteSchema;
